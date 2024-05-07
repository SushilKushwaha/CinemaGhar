import React from 'react';
import  AuthForm  from '../Auth/AuthForm';
import { sendAdminAuthRequest } from '../../api-helpers/api-helpers';
import { useDispatch } from 'react-redux';
import { adminActions } from '../../store';


const Admin = () => {

  const dispatch = useDispatch();

  const getData = (data) => {
      console.log("Admin", data);
      sendAdminAuthRequest( data.inputs).then((res) =>
        console.log(res) 
      ).then(() => dispatch(adminActions.login())).catch(error=>console.log(error));
  };

  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={true} />
    </div>
  )
}

export default Admin;