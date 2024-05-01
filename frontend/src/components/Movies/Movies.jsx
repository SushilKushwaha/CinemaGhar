import React, { useEffect, useState } from 'react'
import { Box, Typography, } from "@mui/material";
import { getAllMovies, getAllNextMovies } from '../../api-helpers/api-helpers';
import MovieItem from './MovieItem';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [nextmovies, setNextMovies] = useState([]);

  useEffect(() => {
    getAllMovies().then((data) => setMovies(data.movies)).catch((error) => console.log(error));
   }, []);

   useEffect(() => {
    getAllNextMovies().then((data) => setNextMovies(data.nextmovies)).catch((error) => console.log(error));
    }, []);

  return <Box margin={"auto"} marginTop={2}>
    <Typography margin={"auto"} variant='h5' padding={2} width="40%" bgcolor={'#A3B0B6'} textAlign={'center'}>
      All Movies
    </Typography>
    <Box padding={2} margin="auto">
      <Typography variant='h5' textAlign={"center"} className='text-blue-400 uppercase'>
        Now Showing
      </Typography>
    </Box>
    <Box justifyContent={"center"} className="gap-3 flex flex-wrap w-500 ">
      {movies && movies.map((movie, index) =>  <MovieItem id={movie._id} title={movie.title} posterUrl={movie.posterUrl} releaseDate={movie.releaseDate} key={index} />
    )}
    </Box>
    <Box padding={3} margin="auto" marginTop={2}>
      <Typography variant='h5' textAlign={"center"} className='text-blue-400 uppercase'>
        coming soon
      </Typography>
    </Box>
    <Box justifyContent={"center"} className="gap-3 flex flex-wrap w-500 my-4">
    {nextmovies && nextmovies.map((movie, index) =>  <MovieItem id={movie._id} title={movie.title} posterUrl={movie.posterUrl} releaseDate={movie.releaseDate} key={index} />
    )}
    </Box>
  </Box>
}

export default Movies;