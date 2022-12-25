const express = require("express");
const route = express.Router();
const {
    handleAddReview
} = require("../controllers/review.controller");


route.post('/new', handleAddReview);

module.exports = route;