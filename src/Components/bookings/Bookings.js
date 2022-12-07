/* eslint-disable */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBookings } from '../../Redux/bookings/bookings';
import SideNav from '../sideNav';
const Bookings = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings);
  console.log(bookings);
  // const doctors = useSelector((state) => state.doctors.doctors);
  // const status = useSelector((state) => state.bookings.status);

  useEffect(() => {
    dispatch(fetchBookings());
    // dispatch(fetchDoctors());
  }, [dispatch]);
  const displayBookings = bookings.length !== 0 ? (
    bookings.map((booking) => (
      <div className="reserve-dev">
        <div key={booking.id}>
          {/**
            {doctors.map(
              (doctor) =>
                doctor.id === booking.doctor_id && (
                   )
            )}
            */}
            <strong>Doctor Name</strong>
            <h3>first_name : {booking.doctor.first_name}</h3>
            <h3>last_name: {booking.doctor.last_name}</h3>
               
          <h4>City: {booking.city}</h4>
          <p>Date: {booking.date}</p>
          <p>Time: {booking.time}</p>
          <p>Disease description: {booking.disease_desc}</p>
          <button
            className="btn btn-danger"
            onClick={(e) => {
              e.preventDefault();
              fetch(`http://localhost:3000/bookings/${booking.id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
              dispatch(fetchBookings());
            }}
          >
            Cancel Booking
          </button>
        </div>
      </div>
    ))
  ) : (
    <div>
      <h4 className="reservations">No bookings.</h4>
    </div>
  );

  return (
    <div>
      <SideNav />
      <h1>BOOKINGS LIST</h1>
      {displayBookings }
      
    </div>
  );
};

export default Bookings;
