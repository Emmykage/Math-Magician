import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Calculator from './calculator';
import Home from './Home';
import Header from './Header';
import Quotes from './Quotes';

describe('Test components', () => {
  it('Calculator render test', () => {
    const tree = renderer.create(
      <Router>
        <Calculator />

      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Home render test', () => {
    const tree = renderer.create(
      <Router>
        <Home />

      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Header render test', () => {
    const tree = renderer.create(
      <Router>
        <Header />
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Quotes render test', () => {
    const tree = renderer.create(
      <Router>
        <Quotes />
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
