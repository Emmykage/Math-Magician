import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Calculator from './calculator';

it('renders correctly', () => {
  const tree = renderer.create(
  <Router>
    <Calculator />
  </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
 