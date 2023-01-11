const express = require("express");
const route = express.Router();
const {
    handleAddReview,
    handleGetItemReviews
} = require("../controllers/review.controller");


route.post('/new', handleAddReview);
route.get('/item', handleGetItemReviews);

module.exports = route;