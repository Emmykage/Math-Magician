import React from 'react';
import renderer from 'react-test-rederer';
import Header from './Header';

it('Header renders a snapshot properly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
