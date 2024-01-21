// 'use client'
// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import {Input} from "@nextui-org/react";
// import Link from 'next/link';

// const SignInForm = () => {
//    const SignupSchema = Yup.object().shape({
//      email: Yup.string().email('Invalid email').required('Required'),
//    email: Yup.string().email('Invalid email').required('Required'),
//  });
 
//  const registerUser = async(values)=> {

//  const res=  await fetch('http://localhost:5000/register/',{
//     method: 'POST',
//     headers: {'Content-Type':'application/json' },
//     body: JSON.stringify(values)
//   })
//   const data = await res.json()
//   alert(data.msg)
//  }
//   const formik = useFormik({
//     initialValues: {
//       phoneNumber: '',
//       email: '',
//       password: '',
//       role:''
//     },
//     validationSchema:SignupSchema,
//     onSubmit: values => {
//       registerUser(values)
//     },
//   });

//   return (
//     <form   onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">phoneNumber</label>
      
//       <Input 
//        id="email"
//        name="email"
//        type="text"
//        onChange={formik.handleChange}
//        value={formik.values.email}
//       label="email" />
//               {formik?.errors.email}
//          <Input 
//        id="password"
//        name="password"
//        type="password"
//        onChange={formik.handleChange}
//        value={formik.values.password}
//       label="password" />
          
//       <button type="submit">Sign In</button>
//       <div>
//         <p>Don't have an account?</p>
//       <button  color="primary"  variant="flat"  >
//         <Link href="/register">
//             Sign Up
//           </Link>
//           </button>
//       </div>
      
//     </form>
//   );
// };

// export default SignInForm



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
