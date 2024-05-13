import React, { Fragment, useEffect, useState } from 'react';
import { getAdminById } from '../api-helpers/api-helpers';
import { CgProfile } from 'react-icons/cg';



const AdminProfile = () => {

  const [admin, setAdmin] = useState();

  useEffect(() => {

    getAdminById().then((res) => setAdmin(res.admin))
    .catch((error) => console.log(error));

  }, []);

  return (
    <div className="flex w-full">
        <Fragment>
          {admin && (
            <div className="flex flex-col justify-center items-center w-1/3 p-4">
            <CgProfile style={{ fontSize: '6rem', marginBottom: '1rem' }}/>
            <div className="border border-gray-500 rounded-lg p-4">
              {/* <p className="text-center border-b border-gray-300 pb-2 mb-2">Name: {admin.fullName}</p> */}
              <p className="text-center">Email: {admin.email}</p>
            </div>
          </div>
          )}   
          <div className="w-3/4 mx-auto">
      <h3 className="text-3xl font-bold text-center my-4">Movies List</h3>
      {admin && admin.addedMovies.length > 0 && (
      <div className="mx-auto w-4/5">
        {admin.addedMovies.map((movie, index) => (
          <div key={index} className="bg-green-400 flex justify-between items-center text-white p-2 mb-2 rounded">
            <p className="mb-1">Movie: {movie.title}</p>
          </div>
        ))}
      </div>
       )}
    </div>
        </Fragment>
    </div>
  );
};

export default AdminProfile;
