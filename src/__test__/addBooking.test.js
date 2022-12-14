import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';

/* eslint-disable-next-line ... */
import ADDBookings from '../Components/bookings/addBooking';

describe('ADDBookings tests', () => {
  it('render ADDBookings test', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <ADDBookings />
        </Router>
      </Provider>,

    );
    expect(tree).toMatchSnapshot();
  });
});
