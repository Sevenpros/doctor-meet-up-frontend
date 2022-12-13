import { Link } from 'react-router-dom';
// import humburgerMenu from '../assets/images/humburger-menu.svg';

const Humburger = () => (
  <div>
    <div className="navbar">
      <button className="d-sm-block d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
        {/* <img src={humburgerMenu} alt="Menu Icon" /> */}
        Show
      </button>
    </div>

    <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="staticBackdropLabel">DOCTORS BOOKINGS</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <div>
          <div>
            <button type="button" className="btn" data-bs-dismiss="offcanvas" aria-label="Close">
              {' '}
              <Link to="/bookings">My Reservations</Link>
              {' '}
            </button>
          </div>
          <div>
            <button type="button" className="btn " data-bs-dismiss="offcanvas" aria-label="Close">
              {' '}
              <Link to="/Doctors">Doctors</Link>
              {' '}
            </button>
          </div>
          <div>
            <button type="button" className="btn" data-bs-dismiss="offcanvas" aria-label="Close">
              {' '}
              <Link to="/bookings/new">Reserve a Doctor</Link>
              {' '}
            </button>
          </div>
          <div>
            <button type="button" className="btn" data-bs-dismiss="offcanvas" aria-label="Close">
              {' '}
              <Link to="/Add_doctors">Add Doctors</Link>
              {' '}
            </button>
          </div>
          <div>
            <button type="button" className="btn" data-bs-dismiss="offcanvas" aria-label="Close">
              {' '}
              <Link to="/DeleteDoctor">Delete Doctor</Link>
              {' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Humburger;
