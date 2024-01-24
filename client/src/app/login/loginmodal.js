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
      <Button onClick={handleOpen}>Sign In</Button>
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
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder='password'
                className='border p-3 rounded-lg'
                id='password'
                onChange={handleChange}
              />

              <div className='flex gap-2 mt-5'>
                      <p>Don't have an account?</p>
                      <Link href='/register'>
                        <span className='text-blue-700'>Sign up</span>
                      </Link>
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
    </div>
  );
}

export default modal