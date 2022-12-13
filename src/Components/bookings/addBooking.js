/* eslint-disable */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsPersonCircle, BsCaretLeft } from 'react-icons/bs';
import '../../Styles/addBooking.css';

const ADDBookings = () => {
  const currentUser = useSelector((state) => state.users.current_user);

  if(!currentUser.name){
    return < Navigate to= "/login" />
}
else{
  const user = useSelector((state) => state.users.current_user);
  const currentDoctor = useSelector((state) => state.doctor);

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [city, setCity] = useState('');
  const [desc, setDesc] = useState('');
  const [doctor, setDoctor] = useState(currentDoctor.id);
  

  const doctors = useSelector((state) => state.doctors)
  const options = [];
  doctors.filter(doctor => {
    const obj = {};
    obj.value = doctor.id;
    obj.label = `${doctor.last_name}  ${doctor.first_name}`
    options.push(obj)
  })
  const checkBooking = (booking) => {
    return (booking.date == ""|| booking.time == ""|| booking.city == ""|| booking.user_id == ""|| booking.doctor_id == ""|| booking.desc == "")
  }
  const onClickHandle = async e => {
    e.preventDefault();
    const booking = {};
    booking.date = date;
    booking.time = time;
    booking.city = city;
    booking.user_id = user.id;
    booking.doctor_id = doctor;
    booking.disease_desc = desc
    
    if(checkBooking(booking)) {
      console.log(booking)
      toast.error('All field must be filled !', {
        position: toast.POSITION.TOP_CENTER
    });
    return;
    }
    const response = await fetch(`http://localhost:3001/users/${user.id}/bookings`, {
      method: 'POST',
      body: JSON.stringify(booking),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if(response.status === 201){
      toast.success('Booking succesfully Saved !', {
        position: toast.POSITION.TOP_CENTER
    });
      setCity("");
      setDate("");
      setDesc("");
      setDoctor("");
      setTime("");
    }
    else {
      console.log(await response.json())
      toast.error('some error occured!', {
        position: toast.POSITION.TOP_CENTER
    });
    }


  }
  if(currentDoctor.first_name || currentDoctor.last_name){
    // setDoctor(currentDoctor.id)
    return (
      <div className="booking-form"
        style={{
          backgroundImage: `url(${currentDoctor.photo})`,
          // backgroundImage: `url(${externalImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '94vh',
        }}
        >
        <div className="top">
          <button type="button" className="back-btn">
            <Link to="/doctors" className="link-light"><BsCaretLeft /></Link>
          </button>
          <div>
            <BsPersonCircle />
            <p>{user.name}</p>
          </div>
        </div>
        <h1>Reserve A DOCTOR</h1>
        <form className="form">
          <div className="form-item">
            <label htmlFor="date" className='form-label'>Date</label>
            <input
              type="date"
              className='form-controls'
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label htmlFor="time" className='form-label'>Time</label>
            <input
              type="time"
              className='form-controls'
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label htmlFor="desc" className='form-label'>Disease Description</label>
            <textarea
              type="text"
              className='form-controls'
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label htmlFor="city" className='form-label'>Doctor</label>
            <input type="text" className='form-controls' 
            onChange={(e) => setDoctor(currentDoctor.id)}
            value={`${currentDoctor.first_name} ${currentDoctor.last_name}`}/>
          </div>
          {/* <Select options ={options}  onChange={(e) => setDoctor(e.value)}/> */}
          <div className="form-item">
          <label htmlFor="city" className='form-label'>City</label>
            <input
              type="text"
              className='form-controls'
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className='book-btn'
            onClick={ onClickHandle }
          >
            Add Booking
          </button>
        </form>
        <div className="overlay" />
        <ToastContainer />
      </div>
  
    );
  }
  else {
  return (
    <div className='booking-form'
    style={{
      backgroundColor: '#96bf02'
    }}
    >
      <div className="top">
        <button type="button" className="back-btn"
        style={{
          border: '1px solid white',
          width: '60px',
          height: '40px',
        }}
        >
          <Link to="/doctors" className="link-light"><BsCaretLeft /></Link>
        </button>
        <div>
          <BsPersonCircle />
          <p>{user.name}</p>
        </div>
      </div>
      <h1>ADD BOOKING</h1>
      <form className="form">
        <div className="form-item">
          <label htmlFor="date" className='form-label'>Date</label>
          <input
            type="date"
            className='form-controls'
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="time" className='form-label'>Time</label>
          <input
            type="time"
            className='form-controls'
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="desc" className='form-label'>Disease Description</label>
          <textarea
            type="text"
            className='form-controls'
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="city" className='form-label'>Doctor</label>
          <Select options ={options}  onChange={(e) => setDoctor(e.value)} className="form-controls"/>
        </div>
        <div className="form-item">
          <label htmlFor="city" className='form-label'>City</label>
          <input
            type="text"
            className='form-controls'
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className='book-btn'
          onClick={ onClickHandle }
        >
          Add Booking
        </button>
      </form>
      <div className="overlay" />
      <ToastContainer />
    </div>

  );}
}
};

export default ADDBookings;
