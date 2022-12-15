import React from 'react';
import { Routes, Route } from 'react-router';
import Details from '../Components/Details';
import Bookings from '../Components/bookings/Bookings';
import Doctors from '../Components/Doctors';
import Login from '../Components/Login';
import WithoutNav from '../Components/WithoutNav';
import WithNav from '../Components/WithNav';
import ADDBookings from '../Components/bookings/addBooking';
import AddDoctor from '../Components/Add_doctors';
import DeleteDoctor from '../Components/DeleteDoctor';

function Router() {
  return (
    <Routes>
      <Route element={<WithoutNav />}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bookings/new" element={<ADDBookings />} />
      </Route>
      <Route element={<WithNav />}>
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/Add_doctors" element={<AddDoctor />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/DeleteDoctor" element={<DeleteDoctor />} />
      </Route>
    </Routes>
  );
}

export default Router;
