

// const connectToMongo = async () => {
//   try {
//     const res = await mongoose.connect("mongodb+srv://i200538:software1@cluster0.hxvngpy.mongodb.net/");
//     if (res) {
//       console.log("Connected to database successfully");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default connectToMongo;


const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectToDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const connection = await mongoose.connect(process.env.MONGOURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectToDB;