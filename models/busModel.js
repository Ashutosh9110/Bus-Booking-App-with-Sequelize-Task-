
const { DataTypes } = require("sequelize")
const sequelize = require("../utils/db-connections")



const busTable = sequelize.define("busTable", {
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


module.exports = busTable