import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

test('Home renders a snapshot properly', () => {
  const tree = renderer.create(
    <Router>
            <Home />
        </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
  
