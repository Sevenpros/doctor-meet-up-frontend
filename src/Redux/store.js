import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import doctorsReducer from './doctors/doctors';
import doctorReducer from './doctors/doctor;
import bookingsReducer from './bookings/bookings';
import usersReducer from './users/users';

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    doctor: doctorReducer,
    bookings: bookingsReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
