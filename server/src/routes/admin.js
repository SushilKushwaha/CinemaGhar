const express = require('express');
const { addAdmin, adminSignIn } = require('../controllers/adminControllers');
const adminRouter = express.Router();


adminRouter.post('/signup', addAdmin);
adminRouter.post("/signin", adminSignIn);

module.exports = adminRouter;