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
      <h1 className="fw-bolder">{doctor.last_name}</h1>
    </div>
  );
};

export default Details;
