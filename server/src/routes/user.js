const express = require('express');
const userRouter = express.Router()
const { getAllUsers, signUp, updateUser, deleteUser, signIn, getBookingsOfUser}  = require('../controllers/userControllers')


userRouter.post('/signup', signUp);
userRouter.get("/", getAllUsers);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/signin", signIn);
userRouter.get("/bookings/:id", getBookingsOfUser);


module.exports = userRouter;