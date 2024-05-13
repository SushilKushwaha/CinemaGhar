import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link } from "react-router-dom";

const MovieItem = ({title, releaseDate, posterUrl, id}) => {
  return (
    <Card sx={{ width: 300, height: 360, borderRadius: 5, ":hover": { boxShadow: "10px 10px 20px #ccc",}, }}>
      <CardMedia
        sx={{ height: 300, width: 300,}}
        image={posterUrl}
        alt ={title}
      />
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography>
          {title}
        </Typography>
        <Typography variant='body2' color="text.secondary">
        {new Date(releaseDate).toDateString()}
      </Typography>
        <Button variant='contained' LinkComponent={Link} to={`/booking/${id}`} size="small">Book</Button>
      </CardContent>
      
    </Card>
  );
};

export default MovieItem;