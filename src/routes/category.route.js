const express = require("express");
const route = express.Router();
const { 
    handleGetAllCategories
} = require("../controllers/category.controller");

 route.get("/all", handleGetAllCategories);

 module.exports = route;