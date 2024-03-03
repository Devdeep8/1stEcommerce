const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User"); // Assuming you have created the User model as mentioned earlier
const connectMongoDb = require("../database/mongodb");
// Import the function to connect to the database into commonjs
// const jwt = require("jsonwebtoken");
// Your code here

const router = express.Router();

// Call the connectDB function to establish MongoDB connection






// Route to handle signup
router.post("/signup", async (req, res) => {
  try {
    // Extract user data from request body
    const { name, email, mobileNumber, password } = req.body;

    // Check if user already exists with the given email or mobile number
    const existingUser = await User.findOne({
      $or: [{ email }, { mobileNumber }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({
          error: "User already exists with this email or mobile number",
          sucess : false,
        });
    }

    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    connectMongoDb()
    // Create a new user instance
    const newUser = new User({
      name,
      email,
      mobileNumber,
      password: hashedPassword, // Store the hashed password
    });

    // Save the user to the database
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: "User created successfully" , sucess: true });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error"  , sucess : false});
  }
});

// Export the router
module.exports = router;

