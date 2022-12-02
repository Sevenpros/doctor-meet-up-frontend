import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
 import bookingsReducer from './bookings/bookings';
// import greetingReducer from './greeting';

const store = configureStore({
  reducer: {
    // greetingReducer,
bookingsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
