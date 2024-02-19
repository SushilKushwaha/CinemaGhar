'use client'
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import RegisterModel from '@/app/register/registermodel';
import { useFormik } from 'formik';
import * as Yup from 'yup';

  

  const SigninForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
      email: Yup.string().email('Invalid email address').required('Required'),
      validationSchema: Yup.object({
        password: Yup.string()
          .min(6, 'Must be 6 character')
          .required('Required'),
    }),
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
  
 
  return (
    <div>
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
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
               
              <input
                type="password"
                placeholder='password'
                className='border p-3 rounded-lg'
                id='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                errorMessage={formik.errors?.email}
                isRequired
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
    </div>
  );
}

export default SigninForm