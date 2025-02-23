
//change names to match the actual seeds and add or remove as needed

const { user } = require('./users.js');
const { db2 } = require('./db2.js');
const { db3 } = require('./db3.js');
const { db4 } = require('./db4.js');


const sequelize = require('../config/connection.js');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await user();
    console.log('\n----- Table Seeded -----\n');
    
    await db2();
    console.log('\n----- Table Seeded -----\n');

    await db3();
    console.log('\n----- Table Seeded -----\n');

    await db4();
    console.log('\n----- Table Seeded -----\n');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();