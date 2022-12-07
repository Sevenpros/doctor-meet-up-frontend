import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors } from '../Redux/doctors/doctors';
import '../Styles/doctors.css';

const Doctors = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <div className="main-container">
      <div>
        <h1>Available Doctors</h1>
        <p>Please select a Doctor</p>
      </div>
      <div className="doctors">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-container">
            <div>
              <img src={doctor.photo} alt="Doctor-Img" className="doctor-img" />
            </div>
            <div className="doctor-details">
              <h2>
                {doctor.first_name}
                {' '}
                {doctor.last_name}
              </h2>
              <p>{doctor.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
