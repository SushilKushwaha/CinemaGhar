const express = require('express');
const { addNextMovie, getAllNextMovies, getNextMoviesById } = require('../controllers/nextMovieControllers');


const nextMovieRouter = express.Router();

nextMovieRouter.post('/', addNextMovie);
nextMovieRouter.get('/', getAllNextMovies);
nextMovieRouter.get('/:id', getNextMoviesById);

// movie delete route not created

module.exports = nextMovieRouter;