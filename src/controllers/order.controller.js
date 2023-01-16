const Order = require('../model/order.model');

async function handleNewOrder(req, res){
    try{
        // return console.log(req.body);
        let order = new Order(req.body);
        order = await order.save();

        return res.status(201).json({
            message: "item rented sucessfully",
            order,
            statusCode: 201,
            success: true
        });
    }catch(error){
        // console.log(error.message)
        res.status(500).json({
            message: "Internal server error",
            error,
            statusCode: 500,
            success: false
        });
    }
}

module.exports = {
    handleNewOrder
};