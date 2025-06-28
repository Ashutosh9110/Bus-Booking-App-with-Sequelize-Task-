const express = require("express")
const router = express.Router()
const userController = require("../controller/userController")

router.post("/addUser", userController.addUser)
router.get("/getAllUser", userController.findAllUser  )


module.exports = router