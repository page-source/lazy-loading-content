import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Issues from './components/component'

it('component contains Issues List Component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Issues/>)).toEqual(true);
});
