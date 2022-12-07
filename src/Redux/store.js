import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import doctorsReducer from './doctors/doctors';
import usersReducer from './users/users';

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
