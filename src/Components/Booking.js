import React from 'react';

const Booking = (props) => {
  const { booking } = props;
  console.log(booking);
  const {
    city, date, time, doctor,
  } = booking;
  return (
    <div>
      <strong>
        Date:
        {' '}
        {' '}
        {date}
      </strong>

      <strong>time:</strong>
      {' '}
      {time}
      <strong>city:</strong>
      {' '}
      {city}
      <strong>doctor:</strong>
      {' '}
      {doctor.last_name}
      {' '}
      {doctor.first_name}

    </div>
  );
};
export default Booking;
