const {router} = require('express')
router = express.Router()
const registerNewUser  = require('../controllers/userControllers.js')
router.get('/register', registerNewUser)
module.exports = router