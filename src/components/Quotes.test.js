import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from './Quotes';

it('Quotes renders a snapshot properly', () => {
  const tree = renderer.create(<Quotes />);
  expect(tree).toMatchSnapshot();
});
