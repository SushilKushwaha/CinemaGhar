const mongoose = require('mongoose')
const  Schema  = mongoose.Schema;

const userSchema = new Schema({
  mobileNumber: {
    type: String,
    required: true,
  }, 
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
});


const User = mongoose.model('User', userSchema);
module.exports = User