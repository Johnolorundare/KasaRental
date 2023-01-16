const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    item: {
        type: Object,
        required: true
    },
    check_in: {
        type: Date,
        default: new Date()
    },
    check_out: {
        type: Date,
        default: new Date()
    },
    order_date: {
        type: Date,
        default: new Date()
    },
});

module.exports = model("Order", orderSchema);