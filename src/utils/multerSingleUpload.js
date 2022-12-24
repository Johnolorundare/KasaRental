const multer = require('multer');
const imgStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/assets/images/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const uploadImg = multer({ storage: imgStorage });

module.exports = {
    uploadImg
};