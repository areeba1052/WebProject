const express = require('express');
const userRouter = express.Router();
const {getUser,create,updateUser,deleteAccount,login}=require("../Controller/user");

// Signup
userRouter.post('/signup', create);

// get all users
userRouter.get('/get', getUser);

//login
userRouter.get('/login', login);

// Update
userRouter.put('/update/:id', updateUser);

// Delete
userRouter.delete('/delete/:id', deleteAccount);

module.exports = userRouter;
