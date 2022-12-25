const Review = require("../model/review.model");

const handleAddReview = async (req, res) => {
    try{
        console.log(req.body);
        let newReview = new Review(req.body);
        newReview = newReview.save();
        
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
    handleAddReview
};