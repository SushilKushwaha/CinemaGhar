const mongoose = require('mongoose')
const  Schema  = mongoose.Schema;

const movieSchema = new Schema({
  
 title: {
  type: String,
  required: true,
 },
 description: {
  type: String,
  required: true,
 },
 actors: [{
  type: String,
  required: true,
 }],
 releaseDate: {
  type: Date,
  required: true,
 },
 posterUrl: {
  type: String,
  required: true,
 },
 featured: {
  type: Boolean,
 },
 bookings: [{
  type: String,
 }],
 admin: {
  type: mongoose.Types.ObjectId,
  ref: "Admin",
  required: true,
 },

});


const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie