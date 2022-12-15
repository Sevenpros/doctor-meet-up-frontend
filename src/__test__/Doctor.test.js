import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

/* eslint-disable-next-line */
import store from '../redux/store';
import Doctors from '../Components/Doctors';

describe('Bookings tests', () => {
  it('render Countries test', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Doctors />
        </Router>
      </Provider>,

    );
    expect(tree).toMatchSnapshot();
  });
});
