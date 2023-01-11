const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category_name: {
        type: String,
        required: true
    },
    category_id: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    thumbnails: {
        type: [String],
        required: true
    },
    owner_id: {
        type: String,
        required: true
    },
    max_days: {
        type: Number,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        default: "5"
    },
    description: {
        type: String,
        default: "no description added"
    },
    date_added: {
        type: Date,
        default: Date.now()
    }
});

module.exports = model("Item", itemSchema);