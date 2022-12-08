// import { element } from 'prop-types';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctor } from '../Redux/doctors/doctor';
// import { useEffect } from 'react';

const Details = () => {
  const doctor = useSelector((state) => state.doctor);
  //   const { last_name } = doctor;
  const { id } = useParams();
  const dispatch = useDispatch();
  //   console.log(doctor);

  useEffect(() => {
    dispatch(fetchDoctor(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (<h1>{doctor.last_name}</h1>);
};

export default Details;
