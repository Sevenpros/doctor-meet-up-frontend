/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
//import { fetchDoctors } from '../../';
const Reservations = () => {
  const dispatch = useDispatch();
  //const doctors = useSelector((state) => state.doctors.doctors);
  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [city, setCity] = useState('');
  const [doctor_id, setDoctor_id] = useState('');
  const [user_id, setUser_id] = useState('');

  return (
    <div className="reserve-dev">
      <h1>Reserve A Doctor</h1>
      <div>
        <h3> Please select a doctor </h3>
        <select onChange={(e) => setDoctor_id(e.target.value)}>
          <option value={doctor_id}>Select a doctor</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name}
            </option>
          ))}

        </select>
        <div className="input-group mb-3 w-75 my-1">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3 w-75 my-1">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Time
          </label>
          <input
            type="time"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3 w-75 my-1">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            City
          </label>
          <input
            type="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="form-control"
            placeholder="Your city"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <button
          className="btn btn-primary w-75 my-1"
          onClick={(e) => {
            e.preventDefault();
            fetch('http://localhost:3000/users/:id/bookings', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                date,
                time,
                city,
                doctor_id,
                user_id,
              }),
            }).then((response) => response.json());

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
          }}
        >
          Add Booking
        </button>
      </div>
      <ToastContainer />
    </div>

  );
};

export default Reservations;
