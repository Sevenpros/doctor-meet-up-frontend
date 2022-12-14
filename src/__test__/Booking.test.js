import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

/* eslint-disable-next-line */
import store from '../redux/store';
import Bookings from '../Components/bookings/Bookings';

describe('Bookings tests', () => {
  it('render Bookings test', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Bookings />
        </Router>
      </Provider>,

    );
    expect(tree).toMatchSnapshot();
  });
});
