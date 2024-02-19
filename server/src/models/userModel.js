const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  mobileNumber: String, 
  email: String,
  dateOfBirth: String,
  fullName: String,
  password: String
});


const User = mongoose.model('User', userSchema);
module.exports = User