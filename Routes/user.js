const express = require('express');
const userRouter = express.Router();
const {getUser,create,updateUser,deleteAccount,login,registerUser}=require("../Controller/user");

// Signup
userRouter.post('/signup', create);

// Signup with jwt authentication
userRouter.post('/sign', registerUser);

//login
userRouter.get('/login', login);

// get all users
userRouter.get('/get', getUser);

// Update
userRouter.put('/update/:id', updateUser);

// Delete
userRouter.delete('/delete/:id', deleteAccount);

module.exports = userRouter;
