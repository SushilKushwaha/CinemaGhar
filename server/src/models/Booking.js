const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;

const BookingSchema = new Schema({
  
 movie: {
  type: mongoose.Types.ObjectId,
  ref: "Movie",
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
  type: mongoose.Types.ObjectId,
  ref: "User",
  required: true,
 },

});

const Booking = mongoose.model('Booking', BookingSchema);
module.exports = Booking;