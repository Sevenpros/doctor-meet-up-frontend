/* eslint-disable */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify';
import { addBooking } from '../../Redux/bookings/bookings';
const ADDBookings = () => {
  const currentUser = useSelector((state) => state.users.current_user);
  console.log(currentUser.name)
  if(!currentUser.name){
    return < Navigate to= "/login" />
}
else{
  const user = useSelector((state) => state.users.current_user);
  const navigate = useNavigate

  console.log(currentUser.id)
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [city, setCity] = useState('');
  const [desc, setDesc] = useState('');
  const [doctor, setDoctor] = useState('');
  

  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors)
  const options = [];
  doctors.filter(doctor => {
    const obj = {};
    obj.value = doctor.id;
    obj.label = `${doctor.last_name}  ${doctor.first_name}`
    options.push(obj)
  })
  const onClickHandle = e => {
    e.preventDefault();
    const booking = {};
    booking.date = date;
    booking.time = time;
    booking.city = city;
    booking.user_id = user.id;
    booking.doctor_id = doctor;
    booking.disease_desc = desc
    console.log(booking);
    dispatch(addBooking(booking))
    navigate("/bookings");


  }
  return (
    <div className='booking-form'>
      {console.log(options)}
      <h1>ADD BOOKING</h1>
      <form>
        <label htmlFor="visitor" className='form-label'>Visitor</label>
        <input type="text" className='form-control' value={user.name}/>
        <label htmlFor="date" className='form-label'>Date</label>
        <input

          type="date"
          className='form-control'
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="time" className='form-label'>Time</label>
        <input
          type="time"
          className='form-control'
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <label htmlFor="desc" className='form-label'>Disease Description</label>
        <textarea
          type="text"
          className='form-control'
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <label htmlFor="city" className='form-label'>Doctor</label>
        <Select options ={options}  onChange={(e) => setDoctor(e.value)}/>
        <label htmlFor="city" className='form-label'>City</label>
        <input
          type="text"
          className='form-control'
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className='btn btn-primary mt-3'
          onClick={ onClickHandle }
        >
          Add Booking
        </button>
      </form>
      <ToastContainer />
    </div>

  );
}
};

export default ADDBookings;
