import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getAllMovies } from "../api-helpers/api-helpers";
import MovieItem from './Movies/MovieItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';


SwiperCore.use([Navigation]);

const HomePage = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
      getAllMovies().then((data) => setMovies(data.movies)).catch((error) => console.log(error));
  }, []);
  

  return (
  <Box width={"100%"} height={"60%"} margin="auto" marginTop={2}>
    {/* place image Swipper */}
    <Swiper navigation>
        {movies &&
          movies.length > 0 &&
          movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  //background: `url(${movie.posterUrl[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                  height: '600px', // Adjust height as needed
                }}
              >
                {/* <img src='https://images.indianexpress.com/2024/01/Mohanlal-in-Barroz-new-poster.jpg' alt={movie.title} style={{ width: '100%', height: '100%' }} /> */}
                <img src='https://i.ytimg.com/vi/3WIgCOOQn0k/maxresdefault.jpg' alt={movie.title} style={{ width: '100%', height: '100%' }} />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    

    <Box padding={5} margin="auto">
      <Typography variant='h5' textAlign={"center"} className='text-blue-400 uppercase'>
        Now Showing
      </Typography>
    </Box>
    <Box justifyContent={"center"} className="gap-3 flex flex-wrap w-500 ">
      {movies && movies.slice(0,4).map((movie, index) =>  <MovieItem id={movie.id} title={movie.title} posterUrl={movie.posterUrl} releaseDate={movie.releaseDate} key={index} />
    )}
    </Box>
    <Link to="/movies" >
    <Box display="flex" padding={4} margin="auto">
      <Button varient="outlined" sx={{ margin: "auto", color: "#818CF8" }}>
        View All Movies...
      </Button>
    </Box>
    </Link>
    <Box padding={3} margin="auto" >
      <Typography variant='h5' textAlign={"center"} className='text-blue-400 uppercase'>
        coming soon
      </Typography>
    </Box>
    <Box justifyContent={"center"} className="gap-3 flex flex-wrap w-500 my-4">
      {[1,2,3,4].map((item) => ( <MovieItem key={item} />
    ))}
    </Box>
    <Link to="/movies" >
    <Box display="flex" padding={4} margin="auto">
      <Button varient="outlined" sx={{ margin: "auto", color: "#818CF8" }}>
        View All Movies...
      </Button>
    </Box>
    </Link>
  </Box>
  );
}

export default HomePage;