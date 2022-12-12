/* eslint-disable */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBookings } from '../../Redux/bookings/bookings';
// import { cancelBooking } from '../../Redux/bookings/bookings';
import { Navigate } from 'react-router-dom';

const Bookings = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings);
  const currentUser = useSelector((state) => state.users.current_user);
if(!currentUser.name){
    return < Navigate to= "/login" />
}
else {
  const user = useSelector((state) => state.users.current_user);
  useEffect(() => {
    dispatch(fetchBookings(user.id));

    // dispatch(fetchDoctors());
  }, [dispatch]);
  const displayBookings = bookings.length !== 0 ? (
    bookings.map((booking) => (
      <div className="reserve-dev">
        <div key={booking.id}>
        
            <strong>Doctor Name</strong>
  
            <h3>first_name : {booking.doctor.first_name}</h3>
            <h3>last_name: {booking.doctor.last_name}</h3>
              {console.log(booking.doctor.first_name)} 
          <h4>City: {booking.city}</h4>
          <p>Date: {booking.date}</p>
          <p>Time: {booking.time}</p>
          <p>Disease Symptoms: {booking.disease_desc}</p>
          
        </div>
      </div>
    ))
  ) : (
    <div>
      <h4 className="reservations">No bookings.</h4>
    </div>
  );

  return (
    <div className="container">
      <h1>BOOKINGS LIST</h1>
      {displayBookings }
      
    </div>
  );}
};

export default Bookings;
