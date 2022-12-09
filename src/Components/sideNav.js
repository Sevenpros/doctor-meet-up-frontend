/* eslint-disable */

import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBookings } from '../Redux/bookings/bookings';

import AddDoctor from './Add_doctors';
import DeleteDoctor from './Delete_doctors';
import Reservations from './bookings/Reservebooking';
import Footer from './Footer';
import '../Styles/nav.css';

const SideNav = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookingsReducer);

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  return (
    <nav className="navigation">
      <div className="logo">
        <h2>DOCTORS BOOKINGS</h2>
      </div>
      <ul className="side-nav">
        <li className="side-nav-div">
          <NavLink to="/bookings" className="side-nav-link">
            My Reservations
          </NavLink>
        </li>

        <li className="side-nav-div">
          <NavLink to="/doctors" className="side-nav-link">
            Doctors
          </NavLink>
        </li>
        <li className="side-nav-div">
          <NavLink to="/AddBookings" className="side-nav-link">
            Reserve a Doctor
          </NavLink>
        </li>
        <li className="side-nav-div">
          <NavLink to="/Add_doctors" className="side-nav-link">
            Add Doctors
          </NavLink>
        </li>
        <li className="side-nav-div">
          <NavLink to="/Delete_doctors" className="side-nav-link">
            Delete Doctors
          </NavLink>
        </li>
        { Footer }
        {AddDoctor}
        {DeleteDoctor}
        {Reservations}
      </ul>
    </nav>
  );
};
export default SideNav;
