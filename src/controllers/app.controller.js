const path = require('path');

const handleImage = (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'assets', 'images', req.params.filename));
}

module.exports = {
    handleImage
};