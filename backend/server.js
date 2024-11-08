// Import dependencies
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');  // Add the JWT package
require('dotenv').config();  // Ensure this line is at the very top to load .env

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));  // Configure CORS more securely
app.use(express.json()); // Automatically parse JSON bodies in requests

// PostgreSQL connection setup
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Test the connection
pool.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Connection error', err.stack));

// Endpoint to get all users (for testing)
app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Endpoint to create a user (POST /api/users)
app.post('/api/users', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if user already exists
    const userResult = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userResult.rows.length > 0) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password before storing it
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (err) {
      console.error('Error hashing password:', err);
      return res.status(500).json({ error: 'Error hashing password' });
    }

    // Insert the new user into the database
    await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
      [username, email, hashedPassword]
    );

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Endpoint to log in a user (POST /api/login)
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const userResult = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userResult.rows.length === 0) {
      return res.status(400).json({ error: 'User not found' });
    }

    const user = userResult.rows[0];

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    // Check if JWT_SECRET is loaded properly
    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is not defined!');
      return res.status(500).json({ error: 'JWT_SECRET not defined in .env file' });
    }

    // Log the secret value (for debugging purposes)
    console.log('JWT_SECRET:', process.env.JWT_SECRET);  // This should print the secret value

    // Create JWT token (using the user data)
    const payload = {
      userId: user.id,
      username: user.username,
      email: user.email
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send the token as part of the response
    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
