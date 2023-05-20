const productModel=require("../Model/product");

const create=async (req, res) => {
    let {name,description,price,stock_quantity,image,category}=req.body;
    const product = new productModel({
      name: name,
      description: description,
      price: price,
      stock_quantity:stock_quantity,
      image: image,
      category:category
    });
    try {
      const newProduct = await product.save();
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
const updateProduct=async (req, res) => {
    var id = req.params.id;
    // await userModel.updateOne()
    update = await productModel.updateOne({_id:id},
        { $set: req.body }
    ).then((update) => {
        res.status(200).json(update)
    }).catch(err => {
        res.status(500).json({ "Message": "product Can not be updated", err: err })
    })
}
const delProduct= async (req, res) => {
  try {
    let id=req.params.id;
  const product = await productModel.findByIdAndDelete(id);
  if (!product) {
    return res.status(404).send('Seller not found');
  }
  res.send(product);
} catch (err) {
  res.status(400).send(err.message);
}
  }
// const getProductofSeller=async (req, res) => {
//   try {
//   let id = req.params.id;
//   const products = await productModel.find({ seller_id: id });
//   res.json(products);
// } catch (err) {
//   res.status(500).json({ message: err.message });
// }
//   }




module.exports={create,updateProduct,delProduct}

