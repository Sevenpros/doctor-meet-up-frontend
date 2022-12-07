import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import doctorsReducer from './doctors/doctors';
import bookingsReducer from './bookings/bookings';
const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    bookings: bookingsReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
