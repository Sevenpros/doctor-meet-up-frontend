import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

/* eslint-disable-next-line */
import store from '../redux/store';
import Details from '../Components/Details';

describe('Details tests', () => {
  it('render Details test', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Details />
        </Router>
      </Provider>,

    );
    expect(tree).toMatchSnapshot();
  });
});
