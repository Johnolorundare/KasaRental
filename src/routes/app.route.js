const express = require('express');
const route = express.Router();
const {
    handleImage
} = require('../controllers/app.controller');


route.get('/:filename', handleImage);

module.exports = route;