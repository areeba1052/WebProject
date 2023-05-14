const express = require('express');
const userRouter = express.Router();
const {getUser,create,updateUser,deleteAccount}=require("../Controller/user");

// Signup
userRouter.post('/signup', create);

// Login
userRouter.get('/get', getUser);

// Update
userRouter.put('/update/:id', updateUser);

// Delete
userRouter.delete('/delete/:id', deleteAccount);

module.exports = userRouter;
