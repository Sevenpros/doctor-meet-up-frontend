import React from 'react';
import { Routes, Route } from 'react-router';

import Bookings from '../Components/bookings/Bookings';
import Doctors from '../Components/Doctors';
import Login from '../Components/Login';
import WithoutNav from '../Components/WithoutNav';
import WithNav from '../Components/WithNav';

function Router() {
  return (
    <Routes>

      <Route element={<WithoutNav />}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<WithNav />}>
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/bookings" element={<Bookings />} />
      </Route>
    </Routes>
  );
}

export default Router;
