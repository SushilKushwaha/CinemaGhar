import React from 'react';
import { Box, Typography } from "@mui/material";
import MovieItem from './Movies/MovieItem';


const HomePage = () => {
  return (
  <Box width={"100%"} height={"60%"} margin="auto" marginTop={2}>
    {/* place image Swipper */}

    
    <Box margin={"auto"} width="80%" className="" padding={2}>
      <img src='https://images.indianexpress.com/2024/01/Mohanlal-in-Barroz-new-poster.jpg' alt="" width={"100%"} height={"100%"} />
    </Box>
    <Box padding={5} margin="auto">
      <Typography variant='h5' textAlign={"center"} className='text-blue-400 uppercase'>
        Now Showing
      </Typography>
    </Box>
    <Box justifyContent={"center"} className="gap-3 flex flex-wrap w-500 ">
      {[1,2,3,4].map((item) => ( <MovieItem key={item} />
    ))}
    </Box>
    <Box padding={5} margin="auto" >
      <Typography variant='h5' textAlign={"center"} className='text-blue-400 uppercase'>
        coming soon
      </Typography>
    </Box>
    <Box justifyContent={"center"} className="gap-3 flex flex-wrap w-500 my-4">
      {[1,2,3,4].map((item) => ( <MovieItem key={item} />
    ))}
    </Box>
  </Box>
  );
}

export default HomePage;