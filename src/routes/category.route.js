const express = require("express");
const route = express.Router();
const { 
    handleGetAllCategories,
    handleNewCategory
} = require("../controllers/category.controller");

 route.get("/all", handleGetAllCategories);
 route.post("/new", handleNewCategory);

 module.exports = route;