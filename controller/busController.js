const { Op } = require("sequelize")
const {busModel} = require("../models/busModel")



const addBuses = async (req, res) => {
  try {
    const { busNumber, seatAvailability, seatCapacity } = req.body
    const bus = await busModel.create({
      busNumber,
      seatAvailability,
      seatCapacity
    })
    res.status(200).json({ msg : `Bus with Bus number ${busNumber} has been added`})
  } catch (error) {
    res.status(500).json({ msg : "Unable to add bus"})
  }
}


const getAvailableSeats = async (req, res) => {
  try {
    const seats = parseInt(req.params.seats)
    if (isNaN(seats)) {
      return res.status(400).json({ msg: "Invalid seat number in URL" });
    }
    const buses = await busModel.findAll({
      where: {
        seatAvailability: {
          [Op.gt]: seats
        }
      }
    })
      res.status(200).json(buses)
  } catch (error) {
      console.error(error);
      res.status(500).json({error: "Unable to fetch buses", details: error.message})
  }
}




module.exports = {
  addBuses,
  getAvailableSeats
}