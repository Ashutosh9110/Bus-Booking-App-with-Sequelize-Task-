
const { DataTypes } = require("sequelize")
const sequelize = require("../utils/db-connections")



const userModel = sequelize.define("userModel", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull:false
  },
  name:{
    type: DataTypes.STRING,
    allowNull:false
  },
  email:{
    type: DataTypes.STRING,
    allowNull:false
  }
})


module.exports = {userModel}