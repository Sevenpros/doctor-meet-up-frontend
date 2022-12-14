import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import AddDoctor from '../Components/Add_doctors';

describe('Add_doctor tests', () => {
  it('render Add_doctor test', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <AddDoctor />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
