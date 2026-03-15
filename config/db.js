const mongoose = require("mongoose");

async function connectDB() {
  try {

    await mongoose.connect(
      "mongodb+srv://admin:admin12345@cluster0.7dm2bcv.mongodb.net/rwesstore"
    );

    console.log("MongoDB Connected");

  } catch (err) {

    console.log("MongoDB connection error:", err.message);

  }
}

module.exports = connectDB;