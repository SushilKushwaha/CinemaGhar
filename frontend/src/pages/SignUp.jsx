
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { useFormik } from 'formik';
import Login from '../pages/Login';



const SignupForm = () => {


const saveRegisterInfo = async(values) =>{
  const res=  await fetch(`http://localhost:5000/user/signin/`,{
    method: 'POST',
    headers: {'Content-Type':'application/json' },
    body: JSON.stringify(values)
  })
  const data = await res.json()
  if(res.status == 200) {
    router.push('/login')
  }
}

  const formik = useFormik({
    initialValues: {
      mobileNumber: '',
      email: '',
      dateOfBirth: '',
      fullName: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values);
      saveRegisterInfo(values);
    },
  });
  
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  console.log(formik);

 
  return (
    
    <form onSubmit={formik.handleSubmit}>
        <button onClick={handleOpen} className='text-blue-700'>SignUp</button>
      <Modal  isOpen={isOpen} onClose={handleClose} >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
              <ModalBody>
                <p>Mobile Number</p>
              <input
                type="text"
                placeholder='Enter your phone number'
                className='border p-3 rounded-lg'
                id='mobileNumber'
                name="mobileNumber"
                onChange={formik.handleChange}
                value ={formik.values.mobileNumber}
              />
              {formik?.errors.mobileNumber}
              <p>Email</p>
              <input
                type="email"
                placeholder='Enter your email'
                className='border p-3 rounded-lg'
                id='email'
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik?.errors.email}
              <p>Date of Birth</p>
              <input
                type="date"
                placeholder='Enter your DOB'
                className='border p-3 rounded-lg'
                id='dateOfBirth'
                name="dateOfBirth"
                onChange={formik.handleChange}
                value={formik.values.dateOfBirth}
              />
              <p>Full Name</p>
              <input
                type="text"
                placeholder='Enter your fullName'
                className='border p-3 rounded-lg'
                id='fullName'
                name="fullName"
                onChange={formik.handleChange}
                value={formik.values.fullName}
              />
              <p>Password</p>
              <input
                type="password"
                placeholder='Enter your password'
                className='border p-3 rounded-lg'
                id='password'
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />

              <div className='flex gap-2 mt-5'>
                      <p>Have an account?</p>
                      <Login />
                    </div>

              </ModalBody>
              <ModalFooter>
                <Button type='submit' color="primary" onPress={onClose} className='uppercase'>
                  sign up
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </form>
    
  );
}

export default SignupForm;

