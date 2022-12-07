import React from 'react';
import {
  Routes,
  Route,
} from 'react-router';
import Bookings from '../Components/bookings/Bookings';
import Doctors from '../Components/doctor/Doctors';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Doctors />} />
      <Route path="/bookings" element={<Bookings />} />
    </Routes>
  );
}

export default Router;
