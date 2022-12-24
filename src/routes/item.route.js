const express = require('express');
const route = express.Router();
const { uploadImg } = require("../utils/multerSingleUpload");
const {
  handleNewItem,
  handleGetItems
} = require("../controllers/item.controller");


route.get('/all', handleGetItems);
route.post('/new', uploadImg.single('file'), handleNewItem);

module.exports = route;