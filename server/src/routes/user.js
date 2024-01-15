const express = require('express');
router = express.Router()
const {registerNewUser}  = require('../controllers/userControllers')
router.post('/register', registerNewUser)
module.exports = router