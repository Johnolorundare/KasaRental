const Review = require("../model/review.model");
const Item = require("../model/item.model");

const handleGetItemReviews = async (req, res) => {
    try{
        const { itemId, limit } = req.query;
        let itemReviews = await Review.find({ item_id: itemId }).limit(limit)
        .sort({ createdAt: 'desc' })
        .limit(limit);
        let itemReviewsCount = await Review.countDocuments({ item_id: itemId });
        return res.status(200).json({
            message: "Reviews retrieved sucessfully",
            itemReviews,
            itemReviewsCount,
            statusCode: 200,
            success: true
        });
    }catch(error){
        res.status(500).json({
            message: "Internal server error",
            error,
            statusCode: 500,
            success: false
        });
    }
}
const handleAddReview = async (req, res) => {
    try{
        let newReview = new Review(req.body);
        newReview = await newReview.save();

        let item = await Item.findOne({ _id: req.body.item_id });
        let allReviewsCount = await Review.countDocuments({ item_id: req.body.item_id });
        let allReviewsSum = await Review.aggregate([
            { $match: { item_id: req.body.item_id } },
            { $group: { _id: null, totalRatings: { $sum: "$rating" } } }
        ])
        
        // console.log(item.rating)
        const averageRating = allReviewsSum[0].totalRatings/allReviewsCount;
        item['rating'] = Math.round(averageRating);
        // console.log(item)
        // return console.log(item);
        let updatedItem = await Item.replaceOne({ _id: req.body.item_id }, item);
        updatedItem = await Item.findOne({ _id: req.body.item_id });
        return res.status(201).json({
            message: "review added sucessfully",
            newReview,
            updatedItem,
            statusCode: 201,
            success: true
        });

    }catch(error){
        console.log(error.message)
        res.status(500).json({
            message: "Internal server error",
            error,
            statusCode: 500,
            success: false
        });
    }
}

module.exports = {
    handleAddReview,
    handleGetItemReviews
};