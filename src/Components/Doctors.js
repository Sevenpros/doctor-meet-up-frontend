import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Doctor from './Doctor';
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
          <Doctor
            key={doctor.id}
            id={doctor.id}
            firstName={doctor.first_name}
            lastName={doctor.last_name}
            photo={doctor.photo}
            bio={doctor.bio}
          />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
