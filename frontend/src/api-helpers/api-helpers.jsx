
import axios from 'axios';


export const getAllMovies = async () => {

  const res = await axios.get("http://localhost:5000/movie").catch((error) => console.log(error));

  if (res.status !== 200) {
    return console.log("No Data");
  }

  const data = await res.data;
  return data;
 
};

export const getAllNextMovies = async () => {

  const res = await axios.get("http://localhost:5000/nextmovie").catch((error) => console.log(error));

  if (res.status !== 200) {
    return console.log("No Data");
  }

  const data = await res.data;
  return data;
 
};

export const sendUserAuthRequest = async (data, signup) => {

  const res = await axios.post(`http://localhost:5000/user/${signup ? "signup" : "signin"}`, {
    mobileNumber: signup ? data.mobileNumber : "",
    email: data.email,
    dateOfBirth: signup ? data.dateOfBirth : "",
    fullName: signup ? data.fullName : "",
    password: data.password,
  }).catch((error) => console.log(error));

  if (res.status !== 200 && res.status !== 201) {
    return console.log("Invalid Data");
  }

  const resdata = await res.data;
  return resdata;
 
};

export const sendAdminAuthRequest = async (data) => {

  const res = await axios.post("http://localhost:5000/admin/signin", {
    email: data.email,
    password: data.password,
  }).catch((error) => console.log(error));

  if (res.status !== 200 ) {
    return console.log("Invalid Data");
  }

  const resdata = await res.data;
  return resdata;
 
};


export const getAllMoviesDetails = async (id) => {

  const res = await axios.get(`http://localhost:5000/movie/${id}`).catch((error) => console.log(error));

  if (res.status !== 200) {
    return console.log("No Data");
  }

  const resData = await res.data;
  return resData;
 
};

export const newBooking = async (data) => {

  const res = await axios.post("http://localhost:5000/booking", {
    movie: data.movie,
    seatNumber: data.seatNumber,
    date: data.date,
    user: localStorage.getItem("userId"),
  }).catch((error) => console.log(error));

  if (res.status !== 201) {
    return console.log("Invalid Data");
  }

  const resdata = await res.data;
  return resdata;
 
};

export const getUserBooking = async () => {

  const id = localStorage.getItem("userId");
  const res = await axios.get(`http://localhost:5000/user/bookings/${id}`).catch((error) => console.log(error));

  if (res.status !== 200) {
    return console.log("No Tickets Bookings");
  }

  const resData = await res.data;
  return resData;
 
};

export const deleteBookingById = async (id) => {

  const res = await axios.delete(`http://localhost:5000/booking/${id}`).catch((error) => console.log(error));

  if (res.status !== 200) {
    return console.log("Unable To Delete Bookings");
  }

  const resData = await res.data;
  return resData;
 
};

export const getUserDetails = async () => {

  const id = localStorage.getItem("userId");
  const res = await axios.get(`http://localhost:5000/user/${id}`).catch((error) => console.log(error));

  if (res.status !== 200) {
    return console.log("User Details Not Found");
  }

  const resData = await res.data;
  return resData;
 
};