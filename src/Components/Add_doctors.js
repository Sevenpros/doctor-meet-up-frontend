/* eslint-disable */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { addDoctor } from '../Redux/doctors/doctor';
import '../Styles/addDoctor.css';

const AddDoctor = () => {
    const dispatch = useDispatch();
    const doctors = useSelector((state) => state.doctors);
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [photo, setPhoto] = useState('');
    
    const onClickHandle = (e) => {
        e.preventDefault();
        toast.success("You have succesfully booked this Doctor", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        const doctor = {};
        doctor.first_name = first_name;
        doctor.last_name = last_name;
        doctor.city = city;
        doctor.phone = phone;
        doctor.email = email;
        doctor.bio = bio;
        doctor.specialization = specialization;
        doctor.photo = photo;
        dispatch(addDoctor(doctor));
    };
    
    return (
        <div className="container add-doctor">
            <form className="form">
                <div className="form-item">
                    <label htmlFor="first_name" className='form-label'>First Name</label>
                    <input type="text" className='form-control'value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="last_name" className='form-label'>Last Name</label>
                    <input type="text" className='form-control'value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="city" className='form-label'>City</label>
                    <input type="text" className='form-control'value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="phone" className='form-label'>Contact Number</label>
                    <input type="text" className='form-control'value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input type="text" className='form-control'value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="bio" className='form-label'>Bio</label>
                    <input type="text" className='form-control'value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="specialization" className='form-label'>Specialization</label>
                    <input type="text" className='form-control'value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="photo" className='form-label'>Photo</label>
                    <input type="text" className='form-control'value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    />
                </div>
                <button type="button" className="book-btn" onClick={onClickHandle}>
                    Add Doctor
                </button>
            </form>
        <ToastContainer />
        </div>
    );
};

export default AddDoctor;