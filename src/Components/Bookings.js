import React from 'react';
import { useSelector } from 'react-redux';
import Booking from './Booking';

const Bookings = () => {
  const bookings = useSelector((state) => state.bookingReducer);
  return (
    <div>
      {bookings.map((booking) => (<Booking key={booking.id} booking={booking} />))}
    </div>
  );
};
export default Bookings;
