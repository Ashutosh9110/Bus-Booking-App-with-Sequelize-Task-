const express = require("express")
const router = express.Router()
const busController = require("../controller/busController")


router.post("/addBus", busController.addBuses)
router.get("/available/:seats", busController.getAvailableSeats)


module.exports = router