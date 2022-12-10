import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_BOOKINGS = 'FETCH_BOOKINGS';

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
    default: return state;
  }
};

export default bookingsReducer;
