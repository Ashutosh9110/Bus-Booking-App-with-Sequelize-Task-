
const { DataTypes } = require("sequelize")
const sequelize = require("../utils/db-connections")



const busModel = sequelize.define("busModel", {
  busNumber: {
    type: DataTypes.STRING,
    allowNull:false
  },
  seatAvailability:{
    type: DataTypes.INTEGER,
    allowNull:false
  },
  seatCapacity:{
    type: DataTypes.INTEGER,
    allowNull:false
  }
})


module.exports = {busModel}