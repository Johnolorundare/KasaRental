const express = require('express');
const route = express.Router();
const multer = require('multer');

const imgStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/assets/images/')
  },
  filename: function (req, file, cb) {
    // cb(null, Date.now() + '-' + file.originalname )
    cb(null, file.originalname )
  }
});
const uploadImg = multer({ storage: imgStorage })


route.post('/new', uploadImg.single('file'), (req, res) => {
    res.send(req.file.filename);
});

module.exports = route;