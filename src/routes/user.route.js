const express = require("express");
const route = express.Router();

const { 
    handleRegister,
    handleLogin,
    handleGenerateProfileImage,
    handleUpdateProfileImage
} = require("../controllers/user.controller");


route.post("/register", handleRegister);
route.post("/login", handleLogin);
route.post("/new/image", handleGenerateProfileImage);
route.post("/update/image", handleUpdateProfileImage);

module.exports = route;