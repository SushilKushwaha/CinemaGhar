import React from 'react'
import AuthForm from './AuthForm'
import { sendUserAuthRequest } from '../../api-helpers/api-helpers';
import { userActions } from '../../store';
import { useDispatch } from 'react-redux';


const Auth = () => {

  const dispatch = useDispatch();

  const getData = (data) => {
    console.log("Auth", data);
    sendUserAuthRequest( data.inputs, data.signup).then((res) =>
      console.log(res) 
    ).then(() => dispatch(userActions.login())).catch(error=>console.log(error));
  };
  

  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false} />
    </div>
  )
}

export default Auth