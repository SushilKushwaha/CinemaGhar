import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllMoviesDetails, newBooking } from "../../api-helpers/api-helpers";
import {
  Box,
  Button,
  FormLabel,
  IconButton,
  TextField,
  Typography,
  Snackbar,
} from "@mui/material";
import { RiSofaLine } from "react-icons/ri";
import { green } from "@mui/material/colors";

const Booking = () => {
  const [movie, setMovie] = useState();
  const [inputs, setInputs] = useState({ seatNumber: "", date: "" });
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingSuccess, setBookingSuccess] = useState(false); // State for showing success message
  const id = useParams().id;

  useEffect(() => {
    getAllMoviesDetails(id)
      .then((res) => setMovie(res.movie))
      .catch((error) => console.log(error));
  }, [id]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newBooking({ ...inputs, movie: movie._id })
      .then((res) => {
        console.log(res);
        setBookingSuccess(true); // Show the success popup
      })
      .catch((error) => console.log(error));
  };

  const handleSeatClick = (seat) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seat)) {
        return prevSelectedSeats.filter(
          (selectedSeat) => selectedSeat !== seat
        );
      } else {
        return [...prevSelectedSeats, seat];
      }
    });

    setInputs((prevInputs) => ({
      ...prevInputs,
      seatNumber: seat,
    }));
  };

  return (
    <div>
      {movie && (
        <Fragment>
          <Typography
            padding={3}
            fontFamily="fantasy"
            variant="h4"
            textAlign={"center"}
          >
            Book Tickets of Movie: {movie.title}
          </Typography>
          <Box display={"flex"} justifyContent={"center"}>
            <Box
              display={"flex"}
              justifyContent={"column"}
              flexDirection="column"
              padding={3}
              width="30%"
              marginRight={"auto"}
              className="mx-auto border border-gray-700 p-4 rounded-lg"
            >
              <div className="mx-auto max-w-2xl">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-40 h-80 md:w-full md:max-h-70 mx-auto mb-4 rounded-lg shadow-md"
                />
                <Box
                  className="mx-auto"
                  width={"100%"}
                  marginTop={2}
                  padding={2}
                >
                  <Typography paddingTop={1}>{movie.description}</Typography>
                  <Typography fontWeight={"bold"} marginTop={1}>
                    Cast: {movie.actors.map((actor) => " " + actor + ",")}
                  </Typography>
                  <Typography fontWeight={"bold"} marginTop={1}>
                    Release Date: {new Date(movie.releaseDate).toDateString()}
                  </Typography>
                </Box>
              </div>
            </Box>
            <Box width={"40%"} paddingTop={3} className="mx-auto">
              <form onSubmit={handleSubmit}>
                <Box
                  padding={5}
                  marginRight={"auto"}
                  display="flex"
                  flexDirection={"column"}
                >
                  <FormLabel>Select Your Seat</FormLabel>
                  <div className="flex flex-wrap justify-center gap-4">
                    {[...Array(30)].map((_, index) => (
                      <IconButton
                        key={index}
                        onClick={() => handleSeatClick(index + 1)}
                        color={
                          selectedSeats.includes(index + 1)
                            ? "primary"
                            : "default"
                        }
                      >
                        <RiSofaLine />
                      </IconButton>
                    ))}
                  </div>
                  <FormLabel className="mt-3">Booking Date</FormLabel>
                  <TextField
                    value={inputs.date}
                    onChange={handleChange}
                    name="date"
                    type={"date"}
                    margin="normal"
                    variant="standard"
                  />
                  <Button type="submit" sx={{ mt: 3 }}>
                    Book Now
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Fragment>
      )}
      <Snackbar
        open={bookingSuccess}
        autoHideDuration={3000}
        onClose={() => setBookingSuccess(false)}
        message="Booking successful!"
      />
    </div>
  );
};

export default Booking;
