import { Box, Button, Checkbox, FormLabel, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { addMovie } from '../../api-helpers/api-helpers';

const labelProps = {
  mt: 1,
  mb: 1,
};
const SuccessMessage = () => (
  <div className="bg-green-200 border border-green-600 text-green-800 px-4 py-3 rounded relative" role="alert">
    <span className="block sm:inline">Movie Added successfully!</span>
    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
      <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <title>Close</title>
        <path fillRule="evenodd" d="M14.293 5.293a1 1 0 011.414 1.414l-8 8a1 1 0 01-1.414 0l-8-8a1 1 0 111.414-1.414L10 12.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </span>
  </div>
);


const AddMovies = () => {

  const [inputs, setInputs] = useState({title: "", description: "", cast: "", releaseDate: "", posterUrl: "", featured: false,});
  const [actors, setActors] = useState([]);
  const [actor, setActor] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({...prevState, [e.target.name]: e.target.value,}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, actors);
    addMovie({ ...inputs, actors}).then((res) => console.log(res))
    .catch((error) => console.log(error));
    setSubmitted(true);
  };

  return (
    <div>
       {submitted && <SuccessMessage />}
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