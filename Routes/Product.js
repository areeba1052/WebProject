const express = require('express');
const productRouter = express.Router();

const {create,updateProduct,delProduct}=require("../Controller/Product");

// Create a product
productRouter.post('/create', create );

// Update a product
productRouter.put('/update/:id', updateProduct);

// Delete a product
productRouter.delete('/delete/:id',delProduct );

module.exports = productRouter;
//const express = require('express');

