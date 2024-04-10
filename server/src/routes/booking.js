const express = require('express');
const { newBooking, getBookingById, deleteBookingById } = require('../controllers/bookingControllers');

const bookingRouter = express.Router();

bookingRouter.post('/', newBooking);
bookingRouter.get('/:id', getBookingById);
bookingRouter.delete('/:id', deleteBookingById);


module.exports = bookingRouter;