const express = require('express');
const { addMovie, getMovies, getAllMovies, getMoviesById } = require('../controllers/movieContrillers');

const movieRouter = express.Router();

movieRouter.post('/', addMovie);
movieRouter.get('/', getAllMovies);
movieRouter.get('/:id', getMoviesById);



module.exports = movieRouter;