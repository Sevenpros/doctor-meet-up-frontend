import { useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors } from '../Redux/doctors/doctors';
import '../Styles/doctors.css';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 },
];

const Doctors = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const deleteDoctor = (id) => {
    fetch(`http://localhost:3001/doctors/${id}`, {
      method: 'DELETE',
    });
    dispatch(fetchDoctors());
  };

  return (
    <div className="main-container container">
      <div className="header">
        <h1>Available Doctors</h1>
        <p>Please select a Doctor</p>
      </div>
      <Carousel className="doctors" breakPoints={breakPoints}>
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-container">
            <div className="img-div">
              <img src={doctor.photo} alt="Doctor-Img" className="doctor-img" />
            </div>
            <div className="doctor-details">
              <h2>
                <Link to={`/Details/${doctor.id}`} style={{ textDecoration: 'none', color: 'green' }}>
                  {doctor.first_name}
                  {' '}
                  {doctor.last_name}
                </Link>
              </h2>
              <hr className="line" />
              <p className="bio">{doctor.bio}</p>
              <button type="button" className="btn btn-danger" onClick={() => deleteDoctor(doctor.id)}>Delete</button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Doctors;
