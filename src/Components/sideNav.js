/* eslint-disable */

import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBookings } from '../Redux/bookings/bookings';

// import AddDoctor from './Add_doctors';
// import DeleteDoctor from './Delete_doctors';
// import Reservations from './bookings/Reservebooking';
// import Footer from './Footer';

const SideNav = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookingsReducer);

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  return (
    <>

      <div className="side-nav">
        <div className="side-nav-div">
          <NavLink to="/bookings" className="side-nav-link">
            My Reservations
          </NavLink>
        </div>

        <div className="side-nav-div">
          <NavLink to="/doctors" className="side-nav-link">
            Doctors
          </NavLink>
        </div>
        <div className="side-nav-div">
          <NavLink to="/AddBookings" className="side-nav-link">
            Reserve a Doctor
          </NavLink>
        </div>

      </div>

      <div className="side-nav">

        <div className="side-nav-div">
          <NavLink to="/Add_doctors" className="side-nav-link">
            Add Doctors
          </NavLink>
        </div>
        <div className="side-nav-div">
          <NavLink to="/Delete_doctors" className="side-nav-link">
            Delete Doctors
          </NavLink>
        </div>

      </div>

    </>
  );
};
export default SideNav;