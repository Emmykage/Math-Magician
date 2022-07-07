import React from 'react';
import renderer from 'react-test-rederer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

it('Header renders a snapshot properly', () => {
  const tree = renderer.create(
  <Router>
     <Header />

  </Router>
 ).toJSON();
  expect(tree).toMatchSnapshot();
});
 