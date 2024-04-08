const express = require('express');
const userRouter = express.Router()
const { getAllUsers, signUp}  = require('../controllers/userControllers')


userRouter.post('/signup', signUp)
userRouter.get("/", getAllUsers);


module.exports = userRouter;