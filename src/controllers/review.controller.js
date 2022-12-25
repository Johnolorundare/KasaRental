const Review = require("../model/review.model");

const handleGetItemReview = async (req, res) => {
    try{
        const { itemId } = req.params;
        const { limit } = req.query;
        let itemReviews = await Review.find({ item_id: itemId }).limit(limit);
        res.status(200).json({
            message: "Reviews retrieved sucessfully",
            itemReviews,
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
        console.log(req.body);
        let newReview = new Review(req.body);
        newReview = await newReview.save();
        res.status(201).json({
            message: "review added sucessfully",
            newReview,
            statusCode: 201,
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

module.exports = {
    handleAddReview,
    handleGetItemReview
};