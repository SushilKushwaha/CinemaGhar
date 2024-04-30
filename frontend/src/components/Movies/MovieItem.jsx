import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'

const MovieItem = ({title, releaseDate, posterUrl, id}) => {
  return (
    <Card sx={{ width: 300, height: 350, borderRadius: 5, ":hover": { boxShadow: "10px 10px 20px #ccc",}, }}>
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
        <Button size="small">buy</Button>
      </CardContent>
      
    </Card>
  );
};

export default MovieItem;