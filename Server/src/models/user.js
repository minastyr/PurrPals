const { DataTypes, Sequelize, Model } = require('sequelize');
const bcrypt = require('bcrypt');

// Define the User class extending Sequelize's Model
class User extends Model {
  async setPassword(password) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(password, saltRounds);
  }
}

// Define the UserFactory function to initialize the User model
function UserFactory(sequelize) {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      zipCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',            
    hooks: {
        // Before creating a new user, hash and set the password
        beforeCreate: async (user) => {
          await user.setPassword(user.password);
        },
        // Before updating a user, hash and set the new password if it has changed
        beforeUpdate: async (user) => {
          if (user.changed('password')) {
            await user.setPassword(user.password);
          }
        },
      }
    });
  

  return User;  // Return the initialized User model
}

module.exports = { User, UserFactory };