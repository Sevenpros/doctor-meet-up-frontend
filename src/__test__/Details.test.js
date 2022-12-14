import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import Details from '../Components/Details';
import { BrowserRouter as Router } from 'react-router-dom';


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
