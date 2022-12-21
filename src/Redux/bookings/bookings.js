import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_BOOKINGS = 'FETCH_BOOKINGS';
const CANCEL_BOOKING = 'CANCEL_BOOKING';

export const fetchBookings = createAsyncThunk(FETCH_BOOKINGS, async (id) => {
  const Response = await fetch(`https://doctor-meetup.onrender.com/users/${id}/bookings`);
  const result = await Response.json();
  return result;
});

export const cancelBooking = createAsyncThunk(CANCEL_BOOKING, async (id) => {
  const Response = await fetch(`https://doctor-meetup.onrender.com/users/${id}/bookings/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await Response.json();
  return result;
});

const initialState = [];

const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_BOOKINGS}/fulfilled`:
      return [...action.payload];
    case `${CANCEL_BOOKING}/fulfilled`:
      return [...state, action.payload];
    default: return state;
  }
};

export default bookingsReducer;
