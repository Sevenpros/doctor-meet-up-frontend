import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { BsCaretLeft } from 'react-icons/bs';
import { fetchDoctor } from '../Redux/doctors/doctor';
import '../Styles/details.css';

const Details = () => {
  const doctor = useSelector((state) => state.doctor);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctor(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container-det">
      <div className="doctor-div">
        <img src={doctor.photo} alt="Doctor-Img" className="doc-img" />
        <button type="button" className="back-btn">
          <Link to="/doctors" className="link-light"><BsCaretLeft /></Link>
        </button>
      </div>
      <div className="doctor-det">
        <h2>
          {doctor.first_name}
          {' '}
          {doctor.last_name}
        </h2>
        <p>
          Specialization:
          {' '}
          {doctor.specialization}
        </p>
        <table className="table">
          <tr>
            <td>City</td>
            <td>{doctor.city}</td>
          </tr>
          <tr>
            <td>Contact Number</td>
            <td>{doctor.phone}</td>
          </tr>
          <tr>
            <td>E-mail</td>
            <td>{doctor.email}</td>
          </tr>
          <tr>
            <td>Bio</td>
            <td>{doctor.bio}</td>
          </tr>
        </table>
        <button type="button" className="reserve-btn">
          <Link to="/bookings/new" className="link-light">Reserve</Link>
        </button>
      </div>
    </div>
  );
};

export default Details;
