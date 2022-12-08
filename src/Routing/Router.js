import React from 'react';
import {
  Routes,
  Route,
} from 'react-router';
import Bookings from '../Components/Bookings';
import Doctors from '../Components/Doctors';
import Details from '../Components/Details';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Doctors />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/Details/:id" element={<Details />} />
    </Routes>
  );
}

export default Router;
