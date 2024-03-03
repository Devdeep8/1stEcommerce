// productRoutes.js

const express = require('express');
const multer = require('multer');
const Product = require('../models/Product');
const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../frontend/public/uploads/product'); // Save in frontend folder
  },
  filename: function (req, file, cb) {
    // Use Date.now() to generate a unique filename
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// POST route to save product information
router.post('/newproducts', upload.array('images', 5), async (req, res) => {
  try {
    const { name, slug, description, color, size, price, pincodeAvailability } = req.body;

    // Extract filenames from req.files
    const images = req.files.map(file => file.filename);

    // Create new product
    const product = new Product({
      name,
      slug,
      description,
      color,
      size,
      price,
      pincodeAvailability,
      images
    });

    // Save product to database
    await product.save();

    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    console.error('Error saving product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

// all product 
router.get('/allproducts', async (req, res) => {
    try {
      const products = await Product.find(); // Retrieve all products from the database
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  module.exports = router;
// all product 

