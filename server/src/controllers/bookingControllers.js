const Booking = require("../models/Booking");
const Movie = require("../models/Movie");
const User = require("../models/User");

const newBooking = async (req, res, next) => {
    const { movie, date, seatNumber, user } = req.body;

    let existingMovie;
    let existingUser;
    try {
      existingMovie = await Movie.findById(movie);
      existingUser = await User.findById(user);
    } catch (error) {
      return console.log(error);
    }
    if (!existingMovie) {
      return res.status(404).json({ message: "Movie Not Found With Given ID" });
    }
    if (!existingUser) {
      return res.status(404).json({ message: "User not found with given ID" });
    }


    let booking;
    try {
      booking = new Booking({ movie, date: new Date(`${date}`), seatNumber, user });

      try {
        await booking.save();
        existingMovie.bookings.push(booking);
        await existingMovie.save();
        existingUser.bookings.push(booking);
        await existingUser.save();
    } catch (error) {
        console.error('Error saving data:', error);
        if (existingMovie && existingMovie.bookings.length > 0) {
            existingMovie.bookings.pop();
            await existingMovie.save();
        }
        if (existingUser && existingUser.bookings.length > 0) {
          existingUser.bookings.pop();
          await existingUser.save();
      }
    }

     
    } catch (error) {
      return console.log(error);
    }
    if (!booking) {
      return res.status(500).json({ message: "Unable to create a booking" });
    }
    return res.status(201).json({ booking });
};

module.exports = {newBooking};