const dotenv = require('dotenv');
dotenv.config();

const { Sequelize } = require('sequelize');

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME || '',
      process.env.DB_USER || '',
      process.env.DB_PASSWORD,
      {
        host: 'localhost', //change to correct hosting address 
        port: 5432, //change to correct port
        dialect: 'postgres',
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

module.exports = sequelize;