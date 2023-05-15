const userModel = require('../Model/User'); 
const asyncHandler = require("express-async-handler");
const generateToken = require("../Config/generateToken");


const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, phone, address } = req.body;

  if (!name || !email || !password || !phone || !address) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }

  const userExists = await userModel.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const newUser = await userModel.create({
    name,
    email,
    password,
    phone,
    address
  });

  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
      address: newUser.address,
      token: generateToken(newUser._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

const getUser = async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

const create=async (req, res) => {
    const user = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      address: req.body.address
    });
  
    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

  const login=async (req, res) => {
    try {
        let {email,password}=req.body;
      const User = await userModel.findOne({ email: email });
      if (!User) {
        return res.status(404).send('Seller not found');
      }
      if (User.password !== password ) {
        return res.status(401).send('Invalid password');
      }
      res.send(User);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
const updateUser=async (req, res) => {
    var id = req.params.id;
    // await userModel.updateOne()
    update = await userModel.updateOne({_id:id},
        { $set: req.body }
    ).then((update) => {
        res.status(200).json(update)
    }).catch(err => {
        res.status(500).json({ "Message": "USer Can not be updated", err: err })
    })
}
const deleteAccount = async (req, res) => {
  try {
      let id=req.params.id;
    const user = await userModel.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
}

  module.exports={getUser,create,updateUser,deleteAccount,login,registerUser};