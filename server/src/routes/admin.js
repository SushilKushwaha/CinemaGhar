const express = require('express');
const { addAdmin, adminSignIn, getAdmins } = require('../controllers/adminControllers');
const adminRouter = express.Router();


adminRouter.post('/signup', addAdmin);
adminRouter.post("/signin", adminSignIn);
adminRouter.get("/", getAdmins);

module.exports = adminRouter;