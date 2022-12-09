import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_DOCTOR = 'doctor-meet-up-frontend/doctors/FETCH_DOCTOR';
const ADD_DOCTOR = 'doctor-meet-up-frontend/doctors/ADD_DOCTOR';
const initialState = [];

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_DOCTOR}/fulfilled`:
      return action.payload;
    case `${ADD_DOCTOR}/fulfilled`:
      return [...state];

    default:
      return state;
  }
};

export const fetchDoctor = createAsyncThunk(FETCH_DOCTOR, async (id) => {
  const data = await fetch(`http://localhost:3001/doctors/${id}`);
  const response = await data.json();
  return response;
});

export const addDoctor = createAsyncThunk(ADD_DOCTOR, async (doctor) => {
  const response = await fetch('http://localhost:3001/doctors', {
    method: 'POST',
    body: JSON.stringify(doctor),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
});
export default doctorReducer;
