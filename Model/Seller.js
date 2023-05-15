const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    name: 
    { 
      type: String, 
      required: true 
    },
    email: 
    { 
      type: String, 
      required: true, 
      unique: true },
      
    password: 
    { 
      type: String, 
      required: true },
    phone: 
    { 
      type: String, 
      required: true },
  
    address: 
    { 
      type: String, 
      required: true }
  }, { timestamps: true });

const sellerModel=mongoose.model('Seller',sellerSchema);
module.exports=sellerModel;
