import { useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
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
    <div className="main-container container">
      <div className="header">
        <h1>Available Doctors</h1>
        <p>Please select a Doctor</p>
      </div>
      <Carousel className="doctors" itemsToShow={2}>
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-container">
            <div className="img-div">
              <img src={doctor.photo} alt="Doctor-Img" className="doctor-img" />
            </div>
            <div className="doctor-details">
              <h2>
                <Link to={`/Details/${doctor.id}`}>
                  {doctor.first_name}
                  {' '}
                  {doctor.last_name}
                </Link>
              </h2>
              <hr className="line" />
              <p className="bio">{doctor.bio}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Doctors;
