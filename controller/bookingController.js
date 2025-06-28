const { bookingModel } = require("../models/bookingModel")
const { userModel } = require("../models/userModel")
const { busModel } = require("../models/busModel")
  
  // Create a new booking
const createBooking = async (req, res) => {
  try {
    const { userId, busId, seatNumber } = req.body

    // Basic validation
    if (!userId || !busId || !seatNumber) {
      return res.status(400).json({ message: "All fields are required" })
    }

    const booking = await bookingModel.create({
      userId,
      busId,
      seatNumber,
    });

    res.status(201).json(booking)
  } catch (error) {
    console.error("Booking creation error:", error)
    res.status(500).json({ message: "Unable to create booking", error: error.message })
  }
};  
  
// Get all bookings for a specific user (with bus info)
const getBookingsByUser = async (req, res) => {
  try {
    const userId = req.params.id

    const bookings = await bookingModel.findAll({
      where: { userId },
      include: [{ model: busModel, attributes: ["busNumber"] }],
    });

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch bookings", error: error.message });
  }
}



const getBookingsByBus = async (req, res) => {
  try {
    const busId = req.params.id

    const bookings = await bookingModel.findAll({
      where: { busId },
      include: [{ model: userModel, attributes: ["name", "email"] }],
    });

    res.status(200).json(bookings)
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch bookings", error: error.message })
  }
};

module.exports = {
  createBooking,
  getBookingsByUser,
  getBookingsByBus,
}
