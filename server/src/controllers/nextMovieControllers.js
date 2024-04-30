const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const Admin = require('../models/Admin');
const NextMovie = require('../models/NextMovie');



const addNextMovie = async (req, res, next) => {
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

let nextmovie;
try {
  nextmovie = new NextMovie({ title, description, actors,releaseDate: new Date(`${releaseDate}`), posterUrl, featured, admin: adminId, });

  // const session = await mongoose.startSession();
  // const adminUser = await Admin.findById(adminId);
  // session.startTransaction();

  // await movie.save({ session });
  // adminUser.addedmovies.push(movie);
  // await adminUser.save({ session });
  // await session.commitTransaction();
  
  try {
    const adminUser = await Admin.findById(adminId);
    await nextmovie.save();
    adminUser.addedmovies.push(nextmovie);
    await adminUser.save();
    //console.log('Data saved successfully.');
} catch (error) {
    console.error('Error saving data:', error);
    // Rollback changes if necessary
    // For example, you can remove the recently added movie
    if (adminUser && adminUser.addedmovies.length > 0) {
        adminUser.addedmovies.pop();
        await adminUser.save();
        //console.log('Rollback completed successfully.');
    }
}


} 
catch (error) {
  return console.log(error);
}

if(!nextmovie) {
  return res.status(500).json({ message: "Request Failed" });
  }
return res.status(201).json({ nextmovie });

};

const getAllNextMovies = async (req, res, next) => {
  let nextmovies;
  try {
    nextmovies = await NextMovie.find();
  } catch (error) {
    return console.log(err);
  }
  if(!nextmovies) {
    return res.status(500).json({ message: "Request Failed" });
  }
  return res.status(200).json({ nextmovies })
};

const getNextMoviesById = async (req, res, next) => {
  const id = req.params.id;
  let nextmovie;
  try {
    nextmovie = await NextMovie.findById(id);
  } catch (error) {
    return console.log(err);
  }
  if(!nextmovie) {
    return res.status(404).json({ message: "Invalid movie Id" });
  }
  return res.status(200).json({ nextmovie });
};

module.exports = { addNextMovie, getAllNextMovies, getNextMoviesById}