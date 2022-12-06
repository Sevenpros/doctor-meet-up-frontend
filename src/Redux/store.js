import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import bookingReducer from './booking';

const store = configureStore({
  reducer: {
    bookingReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
