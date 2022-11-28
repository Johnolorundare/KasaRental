const express = require("express");
const route = express.Router();

const { 
    handleRegister,
    handleLogin
} = require("../controllers/user.controller");


route.post("/register", handleRegister);
route.post("/login", handleLogin);

module.exports = route;