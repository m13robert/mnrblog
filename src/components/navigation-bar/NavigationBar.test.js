import React from 'react';
import { shallow } from 'enzyme';
import NavigationBar from './NavigationBar';
import Title from '../title/Title';

describe('NavigationBar', () => {
  it('should render with a div', () => {
    const wrapper = shallow(<NavigationBar />);
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render with a <Title />', () => {
    const wrapper = shallow(<NavigationBar />);
    expect(wrapper.find(Title).length).toEqual(1);
  });
});
