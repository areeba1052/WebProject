const sellerModel = require('../Model/Seller');


const getUser = async (req, res) => {
  try {
    const users = await sellerModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

const create=async (req, res) => {
    const user = new sellerModel({
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
      const User = await sellerModel.findOne({ email: email });
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
    update = await sellerModel.updateOne({_id:id},
        { $set: req.body }
    ).then((update) => {
        res.status(200).json(update)
    }).catch(err => {
        res.status(500).json({ "Message": "Seller Can not be updated", err: err })
    })
}
const deleteAccount = async (req, res) => {
  try {
      let id=req.params.id;
    const user = await sellerModel.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).send('Seller not found');
    }
    res.send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
}

  module.exports={getUser,create,updateUser,deleteAccount,login};