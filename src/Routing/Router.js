import React from 'react';
import {
  Routes,
  Route,
} from 'react-router';
import Bookings from '../Components/Bookings';
import Doctors from '../Components/Doctors';
import Login from '../Components/Login';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Doctors />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/login" element={<Login />} />
      <Route path="/bookings" element={<Bookings />} />

    </Routes>
  );
}

export default Router;
