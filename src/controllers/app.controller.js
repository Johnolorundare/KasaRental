const fs = require("fs");
const path = require("path");

const handleImage = (req, res) => {
  try {
    res.sendFile(
      path.resolve(__dirname, "..", "assets", "images", req.params.filename)
    );
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      err,
      success: false,
      statusCode: 500,
    });
  }
};

const handleDeleteImages = (req, res) => {
  const folderPath = path.resolve(__dirname, "..", "assets", "images");

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.log(`Error reading folder: ${err}`);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(folderPath, file);
      fs.unlink(filePath, (err) => {
        if (err) {
          return res.status(500).json({
            message: `Error deleting file ${filePath}: ${err}`,
            err,
            success: false,
            statusCode: 500,
          });
        } else {
          return res.status(200).json({
            message: "All images deleted",
            success: true,
            statusCode: 200,
          });
        }
      });
    });
  });
};

module.exports = {
  handleImage,
  handleDeleteImages,
};
