const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
    sender_id: {
        type: String,
        required: true
    },
    item_id: {
        type: String,
        required: true
    },
    rewiew_content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = model("Review", reviewSchema);