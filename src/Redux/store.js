import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import doctorsReducer from './doctors/doctors';

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
