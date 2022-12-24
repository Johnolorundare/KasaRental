const express = require('express');
const route = express.Router();
const { uploadImg } = require("../utils/multerSingleUpload");
const {
  handleNewItem
} = require("../controllers/item.controller");


route.post('/new', uploadImg.single('file'), handleNewItem);

module.exports = route;