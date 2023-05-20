const express = require('express');
const orderRouter = express.Router();
const { Authenticate,checkSeller } = require('../Controller/authController');
const getOrderOfSeller=require("../Controller/orderController");

// Get all products
orderRouter.get('/get/:id',Authenticate,checkSeller,getOrderOfSeller );

module.exports = orderRouter;