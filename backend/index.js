// backend/index.js
const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
async function connectToDatabase() {
  try {
    await oracledb.createPool({
      user: process.env.ORACLE_USER,
      password: process.env.ORACLE_PASSWORD,
      connectString: process.env.ORACLE_CONNECTION_STRING,
    });
    console.log('Connected to Oracle Database');
  } catch (err) {
    console.error('Error connecting to Oracle Database:', err);
    process.exit(1);
  }
}

// Sample route
app.get('/api/data', async (req, res) => {
  try {
    const connection = await oracledb.getConnection();
    const result = await connection.execute('SELECT * FROM your_table');
    await connection.close();
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).send('Server Error');
  }
});

// Start server
app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  await connectToDatabase();
});
