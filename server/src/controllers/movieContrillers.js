const jwt = require('jsonwebtoken');
const Movie = require('../models/Movie');


const addMovie = async (req, res, next) => {
const extractedToken = req.headers.authorization.split(" ")[1]; //Bearer token

if (!extractedToken && extractedToken.trim() === "") {
  return res.status(404).json({ message: "Token Not Found" });
}

let adminId;

//verify token
jwt.verify(extractedToken, process.env.SECRET_KEY, (err,decrypted) => {
  if (err) {
    return res.status(400).json({ message: `${err.message}` });
  }
  else {
    adminId = decrypted.id;
    return;
  }
});

//create new movie
const { title, description, actors, releaseDate, posterUrl, featured } = req.body; 
if(!title && title.trim() === "" && !description && description.trim() == "" && !releaseDate && releaseDate.trim() === "" && !posterUrl && posterUrl.trim() === "" && !featured && featured.trim() === "" ) 
{
  return res.status(422).json({ message: "Invalid Inputs" });
}

let movie;
try {
  movie = new Movie({ title, description, actors,releaseDate: new Date(`${releaseDate}`), posterUrl, featured, admin: adminId, });
  movie = await movie.save();
} catch (error) {
  return console.log(err);
}

if(!movie) {
  return res.status(500).json({ message: "Request Failed" });
}
return res.status(201).json({ movie });

};

const getMovies = async (req, res, next) => {
  let movies;
  try {
    movies = await Movie.find();
  } catch (error) {
    return console.log(err);
  }
  if(!movies) {
    return res.status(500).json({ message: "Request Failed" });
  }
  return res.status(200).json({ movies })
};

module.exports = { addMovie, getMovies}