import React from 'react';
import { useSelector } from 'react-redux';
import {
  Routes,
  Route,
} from 'react-router';
import Bookings from '../Components/Bookings';
import Doctors from '../Components/Doctors';
import Login from '../Components/Login';

function Router() {
    const current_user = useSelector((state) => state.users.current_user)
    console.log(current_user)
  return (
    <Routes>
      <Route path="/" element={<Doctors /> } >
      </Route>
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/login" element={<Login />} />
      <Route path="/bookings" element={<Bookings />} />

    </Routes>
  );
}

export default Router;
