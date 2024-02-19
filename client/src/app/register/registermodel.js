'use client'
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import Loginmodel from '@/app/login/loginmodal';
import { useFormik } from 'formik';


const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      mobileNumber: '',
      email: '',
      dateOfBirth: '',
      fullName: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

 
  return (
    <div>
       <form onSubmit={formik.handleSubmit}>
        <button onClick={handleOpen} className='text-blue-700'>Sign up</button>
      <Modal isOpen={isOpen} onClose={handleClose} >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
              <ModalBody>
                <p>Mobile Number</p>
              <input
                type="text"
                maxlength="10" pattern="\d{10}"
                placeholder='Enter your phone number'
                className='border p-3 rounded-lg'
                id='number'
                onChange={handleChange}
              />
              <p>Email</p>
              <input
                type="email"
                placeholder='Enter your email'
                className='border p-3 rounded-lg'
                id='email'
                onChange={handleChange}
              />
              <p>Date of Birth</p>
              <input
                type="date"
                placeholder='Enter your DOB'
                className='border p-3 rounded-lg'
                id='birthday'
                onChange={handleChange}
              />
              <p>Full Name</p>
              <input
                type="text"
                placeholder='Enter your fullName'
                className='border p-3 rounded-lg'
                id='name'
                onChange={handleChange}
              />
              <p>Password</p>
              <input
                type="password"
                placeholder='Enter your password'
                className='border p-3 rounded-lg'
                id='password'
                onChange={handleChange}
              />

              <div className='flex gap-2 mt-5'>
                      <p>Have an account?</p>
                      <Loginmodel />
                    </div>

              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose} className='uppercase'>
                  sign up
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </form>
    </div>
  );
}

export default SignupForm

