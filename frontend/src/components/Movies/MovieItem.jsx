import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'

const MovieItem = () => {
  return (
    <Card sx={{ width: 300, height: 350, borderRadius: 5, ":hover": { boxShadow: "10px 10px 20px #ccc",}, }}>
      <CardMedia
        sx={{ height: 300, width: 300,}}
        image="https://th-i.thgim.com/public/entertainment/movies/8ywivk/article67928902.ece/alternates/FREE_1200/Kalki%20Bhairavaa.jpg"
      />
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography>
          Lizard
        </Typography>
        <Button size="small">buy</Button>
      </CardContent>
    </Card>
  );
};

export default MovieItem;