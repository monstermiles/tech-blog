const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');


class User extends Model {
    //function for comparing password on login
    checkPassword(loginPw) {

      return bcrypt.compareSync(loginPw, this.password);
    }
  }
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        username : {
            type: DataTypes.STRING,   
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,   
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        hooks: {
          //hashes password
          beforeCreate: async (newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
          },

        //   beforeUpdate: async (updatedUserData) => {
        //     updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        //     return updatedUserData;
        //   },
        },

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
      }
)

module.exports = User;
