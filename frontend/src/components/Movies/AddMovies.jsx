import { Box, Button, Checkbox, FormLabel, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const labelProps = {
  mt: 1,
  mb: 1,
};

const AddMovies = () => {

  const [inputs, setInputs] = useState({title: "", description: "", cast: "", releaseDate: "", posterUrl: "", featured: false,});
  const [actors, setActors] = useState([]);
  const [actor, setActor] = useState("");

  const handleChange = (e) => {
    setInputs((prevState) => ({...prevState, [e.target.name]: e.target.value,}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, actors);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box width={"50%"} padding={5} margin="auto" display={"flex"} flexDirection="column" boxShadow={"10px 10px 20px #ccc"}>
          <Typography textAlign={"center"} variant='h4' fontFamily={"verdena"}>
            Add New Movie
          </Typography>
          <FormLabel sx={labelProps} padding={2}>Title</FormLabel>
          <TextField value={inputs.title} onChange={handleChange} name='title' variant='standard' margin='normal' />
          <FormLabel sx={labelProps}>Description</FormLabel>
          <TextField value={inputs.description} onChange={handleChange} name='description' variant='standard' margin='normal' />
          <FormLabel sx={labelProps}>Cast</FormLabel>
          <Box display={"flex"}>
          <TextField value={actor} onChange={(e) => setActor(e.target.value)} name='cast' variant='standard' margin='normal' />
          <Button onClick={() => { setActors([...actors, actor]); setActor(""); }}>Add</Button>
          </Box>
          <FormLabel sx={labelProps}>Release Date</FormLabel>
          <TextField type='date' value={inputs.releaseDate} onChange={handleChange} name='releaseDate' variant='standard' margin='normal' />
          <FormLabel sx={labelProps}>Poster URL</FormLabel>
          <TextField value={inputs.posterUrl} onChange={handleChange} name='posterUrl' variant='standard' margin='normal' />
          <FormLabel sx={labelProps}>Featured</FormLabel>
          <Checkbox name='featured' checked={inputs.featured} onClick={(e) => setInputs((prevState) => ({ ...prevState, featured: e.target.checked, }))} sx={{ mr: "auto" }} />
          <Button type='submit' variant='contained' sx={{ margin: "auto", width: "30%", bgcolor: "#2b2d42", ":hover": { bgcolor: "#121217"}}}>Add New Movie</Button>
        </Box>
      </form>
    </div>
  )
}

export default AddMovies;