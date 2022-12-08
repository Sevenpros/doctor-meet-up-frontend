import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import doctorsReducer from './doctors/doctors';
import doctorReducer from './doctors/doctor';

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    doctor: doctorReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
