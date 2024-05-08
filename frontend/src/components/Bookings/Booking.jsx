import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAllMoviesDetails } from '../../api-helpers/api-helpers';
import { Box, Typography } from '@mui/material';

const Booking = () => {

  const [movie, setMovie] = useState();
  const id = useParams().id;
  console.log(id);

  useEffect(() => {
      getAllMoviesDetails(id).then((res) => setMovie(res.movie)).catch((error) => console.log(error));
  },[id]);
  console.log(movie);

  return (
    <div>
      {movie && (
        <Fragment>
          <Typography padding={3} fontFamily='fantasy' variant='h4' textAlign={"center"}>
            Book Tickets of Movie: {movie.title}
          </Typography>
          <Box display={"flex"} justifyContent={"center"}>
            <Box display={"flex"} justifyContent={"column"} flexDirection="column" padding={3} width="50%" marginRight={"auto"}>
              <img width="30%" height={"300px"} src={movie.posterUrl} alt={movie.title} />
              <Box width={"80%"} marginTop={3} padding={2}>
                <Typography paddingTop={2}>
                  {movie.description}
                </Typography>
                <Typography fontWeight={"bold"} marginTop={1}>
                  Actors: {movie.actors.map((actor) => " " + actor + ",")}
                </Typography>
                <Typography fontWeight={'bold'} marginTop={1}>
                  Release Date: {new Date(movie.releaseDate).toDateString()}
                </Typography>
              </Box>

            </Box>

          </Box>
        </Fragment>
      )};
    </div>
  )
}

export default Booking;