'use client'
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import Link  from 'next/link';

function modal() {
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
      <Button onClick={handleOpen}>Open Modal</Button>
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
                      <Link href={"/login"}>
                        <span className='text-blue-700'>Sign in</span>
                      </Link>
                    </div>

              </ModalBody>
              <ModalFooter>
                <Link href='/login'>
                <Button color="primary" onPress={onClose} className='uppercase'>
                  sign up
                </Button>
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default modal
