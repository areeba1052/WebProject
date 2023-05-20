//first it get the products that are sold by the seller 

const orderModel = require('../Model/orderModel'); 
const orderItemModel = require('../Model/orderItem');
const productModel = require('../Model/productModel');

const getOrderOfSeller = async (req, res) => {
  try {
    // Get seller ID from request parameters
    const sellerId = req.params.id;

    // Find all products of a seller 
    const products = await productModel.find({ seller_id: sellerId }); 

    // Extract product IDs from products array
    const productIds = products.map(product => product._id); 

    const orderItems = await orderItemModel.find({ product_id: { $in: productIds } });
    const orderIds= orderItems.map(orderitem => orderitem.order_id );
     const uniqueorder = [...new Set(orderIds)];
    const finalOrders= await orderModel.find({ _id: { $in: uniqueorder } });
    // Find all orders containing products sold by the seller


    res.json({finalOrders,orderItems}); // Send orders data as response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = getOrderOfSeller;