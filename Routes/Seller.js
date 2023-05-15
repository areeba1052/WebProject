const express = require('express');
const sellerRouter = express.Router();
const {getUser,create,updateUser,deleteAccount,login}=require("../Controller/Seller");

// Signup
sellerRouter.post('/signup', create);

//login
sellerRouter.get('/login', login);

// get all sellers
sellerRouter.get('/get', getUser);

// Update
sellerRouter.put('/update/:id', updateUser);

// Delete
sellerRouter.delete('/delete/:id', deleteAccount);

module.exports = sellerRouter;
