const express = require('express');
const { addAdmin } = require('../controllers/adminControllers');
const adminRouter = express.Router();


adminRouter.post('/signup', addAdmin);

module.exports = adminRouter;