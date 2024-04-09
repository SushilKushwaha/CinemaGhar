const express = require('express');
const { newBooking } = require('../controllers/bookingControllers');

const bookingRouter = express.Router();

bookingRouter.post('/', newBooking);


module.exports = bookingRouter;