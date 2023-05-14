const userModel = require('../Model/User'); 

const getUser=async (req, res) => {
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

  module.exports={getUser,create,updateUser,deleteAccount};