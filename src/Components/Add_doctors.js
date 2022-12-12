/* eslint-disable */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { ToastContainer, toast} from 'react-toastify';
import { addDoctor } from '../Redux/doctors/doctor';

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
        <div className="container-fluid d-flex justify-content-center align-items-center w-100 ml-4">
        <div className="container d-grid justify-content-center align-items-center">
            <table className="table borderless d-flex grid-template-column-1fr 1fr w-70">
           
            <tbody>
                <tr className="card d-grid w-100 mr-0">
                <th scope="row borderless">
                    <input
                    type="text"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="form-control borderless"
                    placeholder='Enter first name'
                    />
                </th>
                <td>
                    <input
                    type="text"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    className="form-control border-none"
                    placeholder='Enter last name'
                    />
                </td>
                <td>
                    <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="form-control border-none"
                    placeholder='Enter city name'
                    />
                </td>
                <td>
                    <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control border-none "
                    placeholder='Enter 1...10 digit number'
                    />
                </td>
                <td>
                    <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control border-none"
                    placeholder='Enter email'
                    />
                </td>
                <td>
                    <input
                    type="text"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="form-control border-none"
                    placeholder='Enter bio'
                    />
                </td>
                <td>
                    <input
                    type="text"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    className="form-control border-none"
                    placeholder='Enter specialization'
                    />
                </td>
                <td>
                    <input
                    type="text"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    className="form-control border-none"
                    placeholder='Enter photo url'
                    />
                </td>
                </tr>
            </tbody>
            </table>
            <button type="button" className="btn btn-primary w-100"  onClick={onClickHandle}
            >
            Add Doctor
            </button>
        </div>
        
        <ToastContainer />
        </div>
    );
};

export default AddDoctor;