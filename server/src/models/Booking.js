const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;

const BookingSchema = new Schema({
  
 movie: {
  type: String,
  required: true,
 },
 date: {
  type: Date,
  required: true,
 },
 seatNumber: {
  type: String,
  required: true,
 },
 user: {
  type: String,
  required: true,
 },

});

const Booking = mongoose.model('Booking', BookingSchema);
module.exports = Booking;