const express = require('express');
const { addAdmin, adminSignIn, getAdminById, getAdmins } = require('../controllers/adminControllers');
const adminRouter = express.Router();


adminRouter.post('/signup', addAdmin);
adminRouter.post("/signin", adminSignIn);
adminRouter.get("/", getAdmins);
adminRouter.get("/:id", getAdminById);

module.exports = adminRouter;