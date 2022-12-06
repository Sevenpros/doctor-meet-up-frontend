import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';

const Doctor = (props) => {
  // const dispatch = useDispatch();
  const {
    id, photo, firstName, lastName, bio,
  } = props;

  return (
    <div id={id} className="doctor-container">
      <div>
        <img src={photo} alt="Doctor-Img" className="doctor-img" />
      </div>
      <div className="doctor-details">
        <h2>
          {firstName}
          {' '}
          {lastName}
        </h2>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default Doctor;

Doctor.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
