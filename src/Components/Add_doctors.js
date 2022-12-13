/* eslint-disable */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast} from 'react-toastify';
import { BsCaretLeft } from 'react-icons/bs';
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

        const validate = (doctor) => {
            return (
                doctor.first_name === '' ||
                doctor.last_name === '' ||
                doctor.city === '' ||
                doctor.phone === '' ||
                doctor.email === '' ||
                doctor.bio === '' ||
                doctor.specialization === '' ||
                doctor.photo === ''
            );
        };

        const doctor = {};
        doctor.first_name = first_name;
        doctor.last_name = last_name;
        doctor.city = city;
        doctor.phone = phone;
        doctor.email = email;
        doctor.bio = bio;
        doctor.specialization = specialization;
        doctor.photo = photo;

           if (validate(doctor)) {
            toast.error('All fields must be filled !', {
                position: toast.POSITION.TOP_CENTER,
            });
            return;
        }
    
        dispatch(addDoctor(doctor));
    };
    
    return (
        <div className="add-doctor">
            <button type="button" className="back-btn"
                style={{
                border: '1px solid white',
                width: '60px',
                height: '40px',
                marginBottom: '40px',
                }}
            >
                <Link to="/doctors" className="link-light"><BsCaretLeft /></Link>
            </button>
            <form className="form">
                <div className="form-item">
                    <label htmlFor="first_name" className='form-label'>First Name</label>
                    <input type="text" className='form-controls'value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="last_name" className='form-label'>Last Name</label>
                    <input type="text" className='form-controls'value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="city" className='form-label'>City</label>
                    <input type="text" className='form-controls'value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="phone" className='form-label'>Contact Number</label>
                    <input type="text" className='form-controls'value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input type="text" className='form-controls'value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="bio" className='form-label'>Bio</label>
                    <input type="text" className='form-controls'value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="specialization" className='form-label'>Specialization</label>
                    <input type="text" className='form-controls'value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="photo" className='form-label'>Photo</label>
                    <input type="text" className='form-controls'value={photo}
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