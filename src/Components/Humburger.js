import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import '../Styles/nav.css';
// import humburgerMenu from '../assets/images/humburger-menu.svg';

const Humburger = () => (
  <div className="humbuger">
    <div className="navbar">
      <button
        className="d-sm-block d-md-none ham-btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        <GiHamburgerMenu
          style={{
            backgroundColor: 'white',
            width: '60px',
            height: '30px',
            border: 'none',
          }}
        />
      </button>
    </div>

    <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
      <div className="offcanvas-header">
        <h1 className="offcanvas-title" id="staticBackdropLabel">DOCTORS BOOKINGS</h1>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <div>
          <div>
            <button type="button" className="btn" data-bs-dismiss="offcanvas" aria-label="Close">
              {' '}
              <Link
                to="/bookings"
                style={{
                  color: '#393939',
                  textDecoration: 'none',
                  fontSize: '18px',
                  fontWeight: '700',
                  width: '100%',
                  padding: '12px 25px',
                  display: 'block',
                  margin: '1px 0',
                }}
              >
                My Reservations
              </Link>
              {' '}
            </button>
          </div>
          <div>
            <button type="button" className="btn " data-bs-dismiss="offcanvas" aria-label="Close">
              {' '}
              <Link
                to="/Doctors"
                style={{
                  color: '#393939',
                  textDecoration: 'none',
                  fontSize: '18px',
                  fontWeight: '700',
                  width: '100%',
                  padding: '12px 25px',
                  display: 'block',
                  margin: '1px 0',
                }}
              >
                Doctors
              </Link>
              {' '}
            </button>
          </div>
          <div>
            <button type="button" className="btn" data-bs-dismiss="offcanvas" aria-label="Close">
              {' '}
              <Link
                to="/bookings/new"
                style={{
                  color: '#393939',
                  textDecoration: 'none',
                  fontSize: '18px',
                  fontWeight: '700',
                  width: '100%',
                  padding: '12px 25px',
                  display: 'block',
                  margin: '1px 0',
                }}
              >
                Reserve a Doctor
              </Link>
              {' '}
            </button>
          </div>
          <div>
            <button type="button" className="btn" data-bs-dismiss="offcanvas" aria-label="Close">
              {' '}
              <Link
                to="/Add_doctors"
                style={{
                  color: '#393939',
                  textDecoration: 'none',
                  fontSize: '18px',
                  fontWeight: '700',
                  width: '100%',
                  padding: '12px 25px',
                  display: 'block',
                  margin: '1px 0',
                }}
              >
                Add Doctors
              </Link>
              {' '}
            </button>
          </div>
          <div>
            <button type="button" className="btn" data-bs-dismiss="offcanvas" aria-label="Close">
              {' '}
              <Link
                to="/DeleteDoctor"
                style={{
                  color: '#393939',
                  textDecoration: 'none',
                  fontSize: '18px',
                  fontWeight: '700',
                  width: '100%',
                  padding: '12px 25px',
                  display: 'block',
                  margin: '1px 0',
                }}
              >
                Delete Doctor
              </Link>
              {' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Humburger;
