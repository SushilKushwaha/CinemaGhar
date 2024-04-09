const express = require('express');
const { addMovie } = require('../controllers/movieContrillers');

const movieRouter = express.Router();

movieRouter.post('/', addMovie);


module.exports = movieRouter;