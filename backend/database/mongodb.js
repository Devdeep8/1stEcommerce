const mongoose = require('mongoose')

const connectMongoDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://developerdeepapi:ZS1fiEfuR9CK7okR@devdeep.yrwwswo.mongodb.net/ecommerce", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

module.exports = connectMongoDb;
