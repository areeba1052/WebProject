const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    description: {
        type: String,
        required: true
     },
    price: {
        type: Number,
        required: true
    },
    stock_quantity: {
        type: Number,
        required: true
    },
   
    image: {
        type:String,
        required: true
    },
    category: {
        type: String,
        required: true
    } // added category attribute
});
const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;