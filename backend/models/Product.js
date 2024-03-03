const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  pincodeAvailability: {
    type: [String], // Assuming pincode is a string
    required: true
  },
  images: [{
    type: String, // Assuming image URLs are stored as strings
    required: true
  }]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
