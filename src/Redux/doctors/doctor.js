import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_DOCTOR = 'doctor-meet-up-frontend/doctors/FETCH_DOCTOR';
const initialState = [];

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_DOCTOR}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export const fetchDoctor = createAsyncThunk(FETCH_DOCTOR, async (id) => {
  const data = await fetch(`http://localhost:3001/doctors/${id}`);
  const response = await data.json();
  return response;
});
// export const fetchDoctors = () => (dispatch) => fetch('http://localhost:3000/doctors')
// .then((res) => res.json())
// .then((data) => dispatch(getDoctors(data)));

export default doctorReducer;
