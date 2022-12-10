import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_BOOKINGS = 'FETCH_BOOKINGS';
const ADD_BOOKING = 'ADD_BOOKING';

export const fetchBookings = createAsyncThunk(FETCH_BOOKINGS, async (id) => {
  const Response = await fetch(`http://localhost:3001/users/${id}/bookings`);
  const result = await Response.json();
  return result;
});

const initialState = [];

const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_BOOKINGS}/fulfilled`:
      return [...action.payload];
    case `${ADD_BOOKING}/fulfilled`:
      return [...state];
    default: return state;
  }
};
export const addBooking = createAsyncThunk(ADD_BOOKING, async (booking) => {
  const response = await fetch(`http://localhost:3001/users/${booking.user_id}/bookings`, {
    method: 'POST',
    body: JSON.stringify(booking),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
});

export default bookingsReducer;
