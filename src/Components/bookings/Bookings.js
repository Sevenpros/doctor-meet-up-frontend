/* eslint-disable */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBookings } from '../../Redux/bookings/bookings';
// import { cancelBooking } from '../../Redux/bookings/bookings';
import { Navigate } from 'react-router-dom';
import '../../Styles/bookings.css'

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
        <div key={booking.id} className="booking">

          <div className="booking-det">
            <h2>
              {booking.doctor.first_name}
              {' '}
              {booking.doctor.last_name}
            </h2>
            <table className="table">
              <tr>
                <td>City</td>
                <td>{booking.city}</td>
              </tr>
              <tr>
                <td>Contact Number</td>
                <td>{booking.doctor.phone}</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>{booking.date}</td>
              </tr>
              <tr>
                <td>Time</td>
                <td>{booking.time}</td>
              </tr>
              <tr>
                <td>Disease Symptoms</td>
                <td>{booking.disease_desc}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div>
      <h3 className="reservations">No bookings.</h3>
    </div>
  );

  return (
    <div className="booking-container">
      <h1>BOOKINGS LIST</h1>
      {displayBookings }
      
    </div>
  );}
};

export default Bookings;
