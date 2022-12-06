import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { fetchBookings } from './Redux/booking';
import App from './Components/App';
import store from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(fetchBookings());
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
