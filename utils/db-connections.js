const {Sequelize} = require("sequelize")

const sequelize = new Sequelize("test", "root", "1234", {
  host: "localhost",
  dialect: "mysql"
})


const testConnection = async () => {
  try {
    await sequelize.authenticate()
    console.log("Connection has been established");
  } catch (error) {
    console.log(error);
    
  }
}

testConnection()

module.exports = sequelize