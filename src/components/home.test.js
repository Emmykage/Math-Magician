import React from 'react';
import renderer from 'react-test-renderer'
import Home from './Home';


it('Home renders a snapshot properly', () =>{
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
})