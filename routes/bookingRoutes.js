  const express = require("express")
  const router = express.Router()
  const bookingController = require("../controller/bookingController")

  router.post("/createBooking", bookingController.createBooking)
  router.get("/getUserBooking/:id", bookingController.getBookingsByUser)
  router.get("/getBookingBus/:id", bookingController.getBookingsByBus)



  module.exports = router