const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connections");



const bookingModel = sequelize.define("bookingModel", {


  id : {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId : {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  busId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  seatNumber: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})


module.exports = {
  bookingModel 
}