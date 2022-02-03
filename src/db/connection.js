const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongoose has connected to DB");
  } catch (error) {
    console.log(error);
  }
};

connection();
