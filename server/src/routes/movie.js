const express = require('express');
const { addMovie, getMovies } = require('../controllers/movieContrillers');

const movieRouter = express.Router();

movieRouter.post('/', addMovie);
movieRouter.get('/', getMovies);


module.exports = movieRouter;