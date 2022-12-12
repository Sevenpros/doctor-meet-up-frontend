import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <nav className="navBar">
        <button type="button" onClick={handleToggle}>
          {navbarOpen ? (<MdClose className="close-menu" />) : (
            <FiMenu className="nav-menu" />
          )}
        </button>
        <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
          <li className="active-link">
            <Link to="/" onClick={() => closeMenu()}>Home</Link>
          </li>
          <li className="active-link">
            <Link to="/about" onClick={() => closeMenu()}>About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
