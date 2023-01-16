const express = require('express');
const route = express.Router();
const {
    handleNewOrder
} = require('../controllers/order.controller');

route.post('/new', handleNewOrder);

module.exports = route;