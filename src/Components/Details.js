import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctor } from '../Redux/doctors/doctor';

const Details = () => {
  const doctor = useSelector((state) => state.doctor);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctor(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div>
        <img src={doctor.photo} alt="Doctor-Img" className="doctor-img" />
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name </th>
              <th scope="col">City</th>
              <th scope="col">Contact Number</th>
              <th scope="col">E-mail</th>
              <th scope="col">Bio</th>
              <th scope="col">Specialization</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{doctor.first_name}</th>
              <td>{doctor.last_name}</td>
              <td>{doctor.city}</td>
              <td>{doctor.phone}</td>
              <td>{doctor.email}</td>
              <td>{doctor.bio}</td>
              <td>{doctor.specialization}</td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;
