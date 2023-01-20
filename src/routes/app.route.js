const express = require('express');
const route = express.Router();
const {
    handleImage,
    // handleDeleteImages
} = require('../controllers/app.controller');

route.get('/:filename', handleImage);
// route.delete('/', handleDeleteImages);

module.exports = route;