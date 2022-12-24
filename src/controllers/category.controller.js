const Category = require("../model/category.model");

const handleGetAllCategories = async (req, res) => {
    try{
        let categories = await Category.find();
        res.status(200).json({
            message: "categories retrieved successfully",
            categories,
            statusCode: 200,
            success: true
        });
    }catch(error){
        // console.log(error);
        res.status(500).json({
            message: "Internal server error",
            error,
            statusCode: 500,
            success: false
        });
    }
}
const handleNewCategory = async (req, res) => {
    try{
        // console.log(req.body);
        let { name: categoryName } = req.body;
        let newCategory = new Category({ name: categoryName });
        newCategory = await newCategory.save();
        res.status(201).json({
            message: "category created sucessfully",
            newCategory,
            statusCode: 201,
            success: true
        });
    }catch(error){
        const statusCode = error.code === 11000 ? 409 : 500;
        const message = error.code === 11000 ? "category already exists" : "Internal server error";
        res.status(statusCode).json({
            message,
            success: false,
            error,
            statusCode
        });
        // console.log(error);
    }
}

module.exports = {
    handleGetAllCategories,
    handleNewCategory
};