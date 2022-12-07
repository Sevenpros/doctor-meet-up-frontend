import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { fetchUsers } from './Redux/users/users';
import { fetchBookings } from './Redux/bookings/bookings';
// import { fetchGreeting } from './redux/greeting';
import App from './Components/App';
import store from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(fetchUsers());
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
