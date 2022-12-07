/* eslint-disable */

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ADD_BOOKING from '../../Redux/bookings/bookings';

const ADDBookings = () => {
  const params = useParams();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [city, setCity] = useState('');

  return (
    <div>
      <h1>ADD BOOKING</h1>
      <form>
        <label htmlFor="date">Date</label>
        <input

          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          onClick={
        (e) => {
          e.preventDefault();
          fetch(`http://localhost:3000/users/${params.id}/bookings`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              date,
              time,
              city,
              doctor_id: Number(params.id),
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              dispatch(ADD_BOOKING(data));
            });

          toast.success('You have succesfully booked this doctor', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
    }
        >
          Add Booking
        </button>
      </form>
      <ToastContainer />
    </div>

  );
};

export default ADDBookings;
