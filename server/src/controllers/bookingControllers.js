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

const getBookingById = async (req, res, next) => {
  const id = req.params.id;
  let booking;
  try {
    booking = await Booking.findById(id);
  } catch (error) {
    return console.log(error);
  }
  if (!booking) {
    return res.status(500).json({ message: "Unexpected Error" });
  }
  return res.status(200).json({ booking });
};

const deleteBookingById = async (req, res, next) => {
  const id = req.params.id;
  let booking; 
  try {
    booking = await Booking.findByIdAndDelete(id).populate("user movie");
    console.log(booking);

    try {
      booking.user.bookings.pull(booking);
      await booking.user.save();
      booking.movie.bookings.pull(booking);
      await booking.movie.save();
    } catch (error) {
      console.error('Error saving data: ', error);
      if (booking.user && booking.user.bookings.length > 0) {
        booking.user.bookings.pop();
        await booking.user.save();
      }
      if (booking.movie && booking.movie.bookings.length > 0) {
        booking.movie.bookings.pop();
        await booking.movie.save();
      }
    }

  } catch (error) {
    return console.log(error);
  }
  if (!booking) {
    return res.status(500).json({ message: "Unable to Delete" });
  }
  return res.status(200).json({ message: "Booking Deleted Successfully" });
};

module.exports = {newBooking, getBookingById, deleteBookingById};