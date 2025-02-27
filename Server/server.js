const express = require('express');
const path = require('path');
const app = express();
const Sequelize = require('sequelize');
require('dotenv').config();
const cors = require('cors');
const db = require('./src/models');
const routes = require('./src/routes');

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

const sequelize = db.sequelize;
try {
  sequelize.authenticate();
  console.log('Connection to PostgreSQL has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

//additional items
// Serve static files from the client/public directory
app.use(express.static(path.join(__dirname, '../client/public')));

// Serve static files from the client/src directory
app.use('/src', express.static(path.join(__dirname, '../client/src')));

// Define a route for the root URL to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public', 'index.html'));
});
//end additonal items

app.get('/', (req, res) => {
  res.send('Welcome to PurrPals API');
});

app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));