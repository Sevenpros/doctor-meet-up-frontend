import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_USERS = 'doctor-meet-up-frontend/doctors/FETCH_USERS';
const CURRENT_USER = 'doctor-meet-up-frontend/doctors/CURRENT_USER';
const ADD_USER = 'doctor-meet-up-frontend/doctors/ADD_USER';

const initialState = {
  users: [],
  current_user: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_USERS}/fulfilled`:
      return { ...state, users: action.payload };

    case `${ADD_USER}/fulfilled`:
      return { ...state, current_user: action.payload };

    case CURRENT_USER: {
      return { ...state, current_user: action.user }; }

    default: return state;
  }
};

export const fetchUsers = createAsyncThunk(FETCH_USERS, async () => {
  const data = await fetch('https://doctor-meetup.onrender.com/users');
  const response = await data.json();
  return response;
});

export const addUser = createAsyncThunk(ADD_USER, async (name) => {
  const response = await fetch('https://doctor-meetup.onrender.com/users', {
    method: 'POST',
    body: JSON.stringify({ name }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
});

export const loadCurrentUser = (user) => ({ type: CURRENT_USER, user });
export default usersReducer;
