import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_BOOKINGS = 'FETCH_BOOKINGS';

const fetchAPI = 'http://localhost:3001/users/4/bookings';

export const fetchBookings = createAsyncThunk(FETCH_BOOKINGS, async () => {
  const Response = await fetch(fetchAPI);
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
