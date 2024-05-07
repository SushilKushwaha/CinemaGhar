
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