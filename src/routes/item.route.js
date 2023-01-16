const express = require('express');
const route = express.Router();
const { uploadImg } = require("../utils/multerSingleUpload");
const {
  handleNewItem,
  handleGetItems,
  handleGetCategoryItems,
  handleGetItem
} = require("../controllers/item.controller");


route.get('/all', handleGetItems);
route.get('/category', handleGetCategoryItems);
route.post('/new', uploadImg.array('file'), handleNewItem);
route.get('/:id', handleGetItem);

module.exports = route;