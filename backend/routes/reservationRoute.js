const express = require('express')

const sendReservation=require('../controllers/reservationController')
const router= express.Router();

router.post("/send",sendReservation)

module.exports = router