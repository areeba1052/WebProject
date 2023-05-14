const express = require('express');
const productRouter = express.Router();

const {create,updateProduct,delProduct,getProductofSeller}=require("../Controller/Product");

// Get all products
productRouter.get('/get/:id',getProductofSeller );

// Create a product
productRouter.post('/create', create );

// Update a product
productRouter.put('/update/:id', updateProduct);

// Delete a product
productRouter.delete('/delete/:id',delProduct );

module.exports = productRouter;
//const express = require('express');

