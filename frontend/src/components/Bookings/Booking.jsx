import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAllMoviesDetails } from '../../api-helpers/api-helpers';
import { Typography } from '@mui/material';

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
        </Fragment>
      )};
    </div>
  )
}

export default Booking;