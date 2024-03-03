const express = require('express');
const cors = require('cors');
const connectMongoDb = require('./database/mongodb');
const userRoutes = require('./routes/userRoutes');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const productRoute = require("./routes/productRoutes")
const User = require("./models/User"); // Assuming you have created the User model as mentioned earlier
const Product = require("./models/Product");
// Create an instance of Express
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Connect to MongoDB
connectMongoDb();

// Routes

app.use('/api/product', productRoute);
app.use('/api', userRoutes);

// one product 

app.get('/api/product/allproducts/:slug', async (req, res) => {
  try {
    const { slug } = req.params; // Extract the slug from the URL parameter
    const products = await Product.find({ slug }); // Retrieve products with matching slug
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



// Login route
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(email);
    // console.log(password);

    // Find the user by email
    const user = await User.findOne({ email });
    // console.log(user);

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ error: "User not found", success: false });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    // console.log(password);
    // console.log(user.password);
    // console.log(isPasswordValid);

    // If password is valid, create a JWT token
    if (isPasswordValid) {
      const tokenPayload = { userName: user.name, email: user.email };
      const token = jwt.sign(
        tokenPayload,
        "RAMBILASKITTU", // Your secret key
        { expiresIn: "1h" } // Token expiration time
      );

      // Respond with success message and token
      return res.status(200).json({ message: "Login successful", token, success: true });
    }

    // If password is invalid, return error
    return res.status(401).json({ error: "Invalid password", success: false });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal server error", success: false });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
