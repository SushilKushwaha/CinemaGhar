'use client'
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import RegisterModel from '@/app/register/registermodel';
import { useFormik } from 'formik';
import * as Yup from 'yup';

  

  const SigninForm = () => {
    const saveLoginInfo = async(values) =>{

    const res=  await fetch(`http://localhost:5000/login/`,{
    method: 'POST',
    headers: {'Content-Type':'application/json' },
    body: JSON.stringify(values)
  })
    }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
      
    onSubmit: values => {
      saveLoginInfo(values);
    },
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  
 
  return (
    <form onSubmit={formik.handleSubmit}>
      <button onClick={handleOpen} className='text-blue-700'  variant="flat" >Sign In</button>
      <Modal isOpen={isOpen} onClose={handleClose} >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Sign In</ModalHeader>
              <ModalBody>
              <input
                type="email"
                placeholder='email'
                className='border p-3 rounded-lg'
                id='email'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik?.errors.email}
               
              <input
                type="password"
                placeholder='password'
                className='border p-3 rounded-lg'
                id='password'
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              

              <div className='flex gap-2 mt-5'>
                      <p>Don't have an account?</p>
                        <RegisterModel />
              </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose} className='uppercase'>
                  sign in
                </Button>
              </ModalFooter>
              </>
          )}
        </ModalContent>
      </Modal>
    </form>
  );
}

export default SigninForm