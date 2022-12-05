/* eslint-disable */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBookings } from '../../Redux/bookings/bookings';
// import { fetchDoctors } from "../../Redux/doctors/doctors";

const Bookings = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookingsReducer);
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
                  <h3>Doctor: {doctor.name}</h3>
                )
            )}
            */}
          <h4>{booking.city}</h4>
          <p>{booking.date}</p>
          <p>{booking.time}</p>
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
      <h1>BOOKINGS LIST</h1>
      {displayBookings }
    </div>
  );
};
export default Bookings;
