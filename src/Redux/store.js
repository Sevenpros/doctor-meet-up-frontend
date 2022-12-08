import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import doctorsReducer from './doctors/doctors';
import bookingsReducer from './bookings/bookings';
import usersReducer from './users/users';
import doctorReducer from './doctors/doctor';

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    bookings: bookingsReducer,
    users: usersReducer,
    doctor: doctorReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
