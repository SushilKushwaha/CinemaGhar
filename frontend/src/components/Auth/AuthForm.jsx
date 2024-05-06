import React, { useState } from 'react'
import { Box, Button, Dialog, FormLabel, IconButton, TextField, Typography } from "@mui/material";
import { MdOutlineCancel } from "react-icons/md";

const labelStyle = {mt:1 , mb:1};

const AuthForm = () => {

  const [inputs, setInputs] = useState({
      mobileNumber: "",
      email: "",
      dateOfBirth: "",
      fullName: "",
      password: "",
  });
  const [isSignup, setIsSignup] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <Dialog PaperProps={{ style: { borderRadius: 20}}} open={true}>
      <Box sx={{ ml: "auto", padding: 1}}>
        <IconButton>
          <MdOutlineCancel />
        </IconButton>
      </Box>
      <Typography variant="h4"  textAlign={"center"}>
      {isSignup ? "Signup" : "Login"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box padding={6} display={'flex'} justifyContent={'center'} flexDirection="column" width={400} margin="auto" alignContent={"center"}>
          {isSignup && (
            <>
            {" "}
            <FormLabel sx={labelStyle}>Mobile No.</FormLabel>
          <TextField
           value={inputs.mobileNumber}
           onChange={handleChange}
           margin='normal' variant='standard' type="tel" name='mobileNumber'/>
            </>
          )}
        
          <FormLabel sx={labelStyle}>Email</FormLabel>
          <TextField value={inputs.email}
           onChange={handleChange} margin='normal' variant='standard' type={"email"} name='email'/>
          {isSignup && (
            <>
            {" "}
            <FormLabel sx={labelStyle}>Date of Birth</FormLabel>
          <TextField value={inputs.dateOfBirth}
           onChange={handleChange} margin='normal' variant='standard' type="date" name='dateOfBirth'/>
          
          <FormLabel sx={labelStyle}>Full Name</FormLabel>
          <TextField value={inputs.fullName}
           onChange={handleChange} margin='normal' variant='standard' type={"text"} name='fullName'/>
            </>
          )}
          
          <FormLabel sx={labelStyle}>Password</FormLabel>
          <TextField value={inputs.password}
           onChange={handleChange} margin='normal' variant='standard' type={"password"} name='password'/>
        <Button sx={{mt: 2, borderRadius: 10,}} type='submit' fullWidth variant='contained'>{isSignup ? "Signup" : "Login"}</Button>
        <Button onClick={() => setIsSignup(!isSignup)} sx={{mt: 2, borderRadius: 10,}} fullWidth>Switch to {isSignup ? "Login" : "Signup"}</Button>
        </Box>
      </form>
    </Dialog>
  )
}

export default AuthForm;