import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

const LOAD_BOOKINGS = 'LOAD_BOOKINGS';
const API_URL = 'http://localhost:3001/users/4/bookings';
const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${LOAD_BOOKINGS}/fulfilled`:
      return [...action.payload];
    default: return state;
  }
};

export const fetchBookings = createAsyncThunk(LOAD_BOOKINGS, async () => {
  const Response = await fetch(API_URL);
  const results = await Response.json();
  return results;
});

export default bookingReducer;
