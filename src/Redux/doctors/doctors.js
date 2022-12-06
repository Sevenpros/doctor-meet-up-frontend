import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_DOCTORS = 'doctor-meet-up-frontend/doctors/FETCH_DOCTORS';
const initialState = [];

const doctorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_DOCTORS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export const fetchDoctors = createAsyncThunk(FETCH_DOCTORS, async () => {
  const data = await fetch('http://localhost:3000/doctors');
  const response = await data.json();
  return response;
});
// export const fetchDoctors = () => (dispatch) => fetch('http://localhost:3000/doctors')
//   .then((res) => res.json())
//   .then((data) => dispatch(getDoctors(data)));

export default doctorsReducer;
