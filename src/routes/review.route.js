const express = require("express");
const route = express.Router();
const {
    handleAddReview,
    handleGetItemReview
} = require("../controllers/review.controller");


route.post('/new', handleAddReview);
route.get('/item/:itemId', handleGetItemReview);

module.exports = route;