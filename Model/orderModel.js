const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({

    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer', required: true 
    },
    order_date: { 
        type: Date, 
        default: Date.now
    },
    total_price: { 
        type: Number, 
        required: true 
    }
  });

const orderModel=mongoose.model('Order',orderSchema);
module.exports=orderModel;
  