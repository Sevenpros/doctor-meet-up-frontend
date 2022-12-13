/* eslint-disable */
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RiFacebookFill, RiTwitterFill, RiVimeoFill } from 'react-icons/ri';
import { FaPinterestP } from 'react-icons/fa'
import { TfiGoogle } from 'react-icons/tfi'
import { fetchBookings } from '../Redux/bookings/bookings';
import { fetchDoctor } from '../Redux/doctors/doctor';

import AddDoctor from './Add_doctors';
import DeleteDoctor from './DeleteDoctor';
import Footer from './Footer';
import '../Styles/nav.css';

const SideNav = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);
  const onclickHandle = () => {
    dispatch(fetchDoctor());
  }
  return (
    <>
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
        <li className="side-nav-div" onClick={onclickHandle} >
          <NavLink to="/bookings/new" className="side-nav-link">
            Reserve a Doctor
          </NavLink>
        </li>
        <li className="side-nav-div">
          <NavLink to="/Add_doctors" className="side-nav-link">
            Add Doctors
          </NavLink>
        </li>
        <li className="side-nav-div">
          <NavLink to="/DeleteDoctor" className="side-nav-link">
            Delete Doctors
          </NavLink>
        </li>
        { Footer }
        {AddDoctor}
        {DeleteDoctor}
      </ul>
      <div className="socials">
        <RiFacebookFill className="socials-i" />
        <RiTwitterFill className="socials-i" />
        <TfiGoogle className="socials-i" />
        <RiVimeoFill className="socials-i" />
        <FaPinterestP className="socials-i" />
        <p>2022,@anasbassi,@Sevenpros,@Ambrosegithub,@eaesmat</p>
      </div>
    </nav>
    </>
  );
};
export default SideNav;
