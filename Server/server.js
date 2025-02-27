const express = require('express');
const app = express();
const Sequelize = require('sequelize');
require('dotenv').config();
const cors = require('cors');
const db = require('./models');
const routes = require('./routes');

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

const sequelize = db.sequelize;
try {
  sequelize.authenticate();
  console.log('Connection to PostgreSQL has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));