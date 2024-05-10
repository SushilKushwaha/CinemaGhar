import React, { Fragment, useEffect, useState } from 'react';
import { deleteBookingById, getUserBooking, getUserDetails } from '../api-helpers/api-helpers';
import { CgProfile } from 'react-icons/cg';
import { MdDeleteForever } from "react-icons/md";


const UserProfile = () => {
  const [bookings, setBookings] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    getUserBooking()
      .then((res) => setBookings(res.bookings))
      .catch((error) => console.log(error));

    getUserDetails().then((res) => setUser(res.user))
    .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
      deleteBookingById(id).then((res) => console.log(res)).catch((error) => console.log(error));
  };

  return (
    <div className="flex w-full">
        <Fragment>
          {user && (
            <div className="flex flex-col justify-center items-center w-1/3 p-4">
            <CgProfile style={{ fontSize: '6rem', marginBottom: '1rem' }}/>
            <div className="border border-gray-500 rounded-lg p-4">
              <p className="text-center border-b border-gray-300 pb-2 mb-2">Name: {user.fullName}</p>
              <p className="text-center">Email: {user.email}</p>
            </div>
          </div>
          )}   
          <div className="w-3/4 mx-auto">
      <h3 className="text-3xl font-bold text-center my-4">Bookings</h3>
      {bookings && bookings.length > 0 && (
      <div className="mx-auto w-4/5">
        {bookings.map((booking, index) => (
          <div key={index} className="bg-green-400 flex justify-between items-center text-white p-2 mb-2 rounded">
            <p className="mb-1">Movie: {booking.movie.title}</p>
            <p className="mb-1">Seat: {booking.seatNumber}</p>
            <p className="mb-1">Date: {new Date(booking.date).toDateString()}</p>
            <button onClick={()=>handleDelete(booking._id)} className="text-red-500 hover:text-red-700">
              <MdDeleteForever className="w-6 h-6 inline-block" />
            </button>
          </div>
        ))}
      </div>
       )}
    </div>
        </Fragment>
    </div>
  );
};

export default UserProfile;
