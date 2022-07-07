import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Quotes from './Quotes';

it('Quotes renders a snapshot properly', () => {
  const tree = renderer.create(
  <Router>
    <Quotes />
  </Router>);
  expect(tree).toMatchSnapshot();
});

