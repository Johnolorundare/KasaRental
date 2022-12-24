const Item = require("../model/item.model");

const handleNewItem = async (req, res) => {
    try{
        let itemData = JSON.parse(req.body.itemData);
        itemData = { ...itemData, thumbnail: req.file.filename }
        let newItem = new Item(itemData);
        newItem = await newItem.save();

        res.status(201).json({
            message: "item added sucessfully",
            newItem,
            statusCode: 201,
            success: true
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "Internal server error",
            error,
            statusCode: 500,
            success: false
        });
    }
}

module.exports = {
    handleNewItem
};