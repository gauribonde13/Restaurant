const Reservation = require("../models/reservation");

const send_reservation = async (req, res) => {
  try {
    const newReserve = new Reservation(req.body);
    await newReserve.save();
    res.send( req.body);
  } catch (error) {
    res.status(400).send("Failed to create reservation: " + error.message);
  }
};

module.exports = send_reservation;
