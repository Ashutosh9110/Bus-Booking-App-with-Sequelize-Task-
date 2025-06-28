const {busModel} = require("./busModel")
const {userModel} = require("./userModel")
const {bookingModel} = require("./bookingModel")



// one to many
userModel.hasMany(busModel)
busModel.belongsTo(userModel)


userModel.hasMany(bookingModel, {foreignKey: "userId"})
bookingModel.belongsTo(userModel, {foreignKey: "userId"})



busModel.hasMany(bookingModel, {foreignKey: "busId"})
bookingModel.belongsTo(busModel, {foreignKey: "busId"})



module.exports = {
  userModel,
  bookingModel,
  busModel
}