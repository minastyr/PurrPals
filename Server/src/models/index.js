const sequelize = require('../config/connection.js');
const { UserFactory } = require('./user');
const User = UserFactory(sequelize);
console.log(User);

module.exports = { User };
//module.exports = { sequelize };