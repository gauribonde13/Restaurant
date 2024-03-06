const Reserve = require('../models/reservationSchemaModel');

const sendReservation = async (req, res) => {
   
    try {
        const newReserve = new Reserve(req.body)
        await newReserve.save()
        res.send(req.body)
      } catch (error) {
        res.status(400).send(error)
      }
}

module.exports = sendReservation;
