/* eslint-disable */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

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
        const doctor = {};
        doctor.first_name = first_name;
        doctor.last_name = last_name;
        doctor.city = city;
        doctor.phone = phone;
        doctor.email = email;
        doctor.bio = bio;
        doctor.specialization = specialization;
        doctor.photo = photo;
        console.log(doctor);
        dispatch(addDoctor(doctor));
    };
    
    return (
        <div className="container d-flex justify-content-center align-items-center">
        <div className="container d-grid justify-content-center align-items-center">
            <table className="table d-flex grid-template-column-1fr 1fr">
            <thead>
                <tr className="card d-grid">
                <th scope="col">First Name</th>
                <th scope="col">Last Name </th>
                <th scope="col">City</th>
                <th scope="col">Contact Number</th>
                <th scope="col">E-mail</th>
                <th scope="col">Bio</th>
                <th scope="col">Specialization</th>
                <th scope="col">Photo</th>
                </tr>
            </thead>
            <tbody>
                <tr className="card d-grid">
                <th scope="row">
                    <input
                    type="text"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                </th>
                <td>
                    <input
                    type="text"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                </td>
                <td>
                    <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                </td>
                <td>
                    <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    />
                </td>
                <td>
                    <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </td>
                <td>
                    <input
                    type="text"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    />
                </td>
                <td>
                    <input
                    type="text"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    />
                </td>
                <td>
                    <input
                    type="text"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    />
                </td>
                </tr>
            </tbody>
            </table>
            <button type="button" className="btn btn-primary" onClick={onClickHandle}>
            Add Doctor
            </button>
        </div>
        </div>
    );
};

export default AddDoctor;