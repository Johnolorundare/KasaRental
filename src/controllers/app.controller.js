const path = require('path');

const handleImage = (req, res) => {
    try{
        res.sendFile(path.resolve(__dirname, '..', 'assets', 'images', req.params.filename));
    }catch(err){
        res.status(500).json({
            message: 'Internal server error',
            err,
            success: false,
            statusCode: 500
        });
    }
}

module.exports = {
    handleImage
};