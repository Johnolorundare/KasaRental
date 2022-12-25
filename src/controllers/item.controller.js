const Item = require("../model/item.model");

const handleGetCategoryItems = async (req, res) => {
    try{
        // return console.log(req.query)
        let { categoryId, limit } = req.query;
        let categoryItems = await Item.find({ category_id: categoryId }).limit(limit);
        res.status(200).json({
            message: "items retrieved sucessfully",
            categoryItems,
            statusCode: 200,
            success: true
        });
    }catch(error){
        res.status(500).json({
            message: "Internal server error",
            error,
            statusCode: 500,
            success: false
        });
    }
}

const handleGetItems = async (req, res) => {
    try{
        let { limit } = req.query;
        let allItems = await Item.find().limit(limit);
        res.status(200).json({
            message: "items retrieved sucessfully",
            allItems,
            statusCode: 200,
            success: true
        });
        // return console.log("d")
    }catch(error){
        res.status(500).json({
            message: "Internal server error",
            error,
            statusCode: 500,
            success: false
        });
    }
}
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
        res.status(500).json({
            message: "Internal server error",
            error,
            statusCode: 500,
            success: false
        });
    }
}

module.exports = {
    handleNewItem,
    handleGetItems,
    handleGetCategoryItems
};