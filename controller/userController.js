const {userModel} = require("../models/userModel")



const addUser = async (req, res) => {
  try {
    const { name, email} = req.body
    const user = await userModel.create({
      name:name,
      email:email
    })

      res.status(200).json({ msg : "User has been added"})
  } catch (error) {
      res.status(500).json({ msg : "Unable to add user"})
  }
}


const findAllUser = async (req, res) => {
    try {
      const users  = await userModel.findAll()
      res.status(200).json(users)
    } catch (error) {
      res.status(404).json({ msg : "Unable to fetch users"})
    }
}





module.exports = {
  addUser,
  findAllUser
}