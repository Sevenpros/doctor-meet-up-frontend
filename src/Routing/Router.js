import React from 'react';
import { Routes, Route } from 'react-router';

import Bookings from '../Components/bookings/Bookings';
import Doctors from '../Components/Doctors';
import Login from '../Components/Login';
import SideNav from '../Components/sideNav';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Doctors />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/login" element={<Login />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/sideNav" element={<SideNav />} />

    </Routes>
  );
}

export default Router;
