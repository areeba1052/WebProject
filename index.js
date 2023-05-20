
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const connectToDB=require('./Config/db.js')
const cors = require('cors');
const userRouter=require('./Routes/user.js')
const productRouter=require('./Routes/Product.js')
const sellerRouter=require('./Routes/Seller.js')
const orderRouter=require('./Routes/orderRoute.js')

// const orderRouter=require('./routes/orderRoutes.js')

const app = express()
const port = process.env.PORT || 5000
connectToDB();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json())

// app.use('/seller',sellerRouter);

// app.use('/order',orderRouter);
app.use('/seller',sellerRouter);
app.use('/product',productRouter);
app.use('/order',orderRouter);
app.use('/user',userRouter);
app.get("/",(req,res)=>{
    res.send("RUNNING SUCCESSFULLY")
})


app.listen(port, ()=>{ console.log(`App listening on port : http://localhost:${port}`)

})