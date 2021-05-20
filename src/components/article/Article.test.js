import React from 'react';
import { shallow } from 'enzyme';
import Article from './Article';
import Title from '../title/Title';
import Paragraph from '../paragraph/Paragraph';

describe('Article', () => {
  it('should render with a Title', () => {
    const wrapper = shallow(<Article title="Some title" content="Some content" />);
    expect(wrapper.find(Title).length).toEqual(1);
  });
  it('should render with a Paragraph', () => {
    const wrapper = shallow(<Article title="Some title" content="Some content" />);
    expect(wrapper.find(Paragraph).length).toEqual(1);
  });
  it('should pass the title prop to the Title', () => {
    const wrapper = shallow(<Article title="Some title" content="Some content" />);
    expect(wrapper.find(Title).props().text).toEqual('Some title');
  });
  it('should pass the content prop to the Paragraph', () => {
    const wrapper = shallow(<Article title="Some title" content="Some content" />);
    expect(wrapper.find(Paragraph).props().text).toEqual('Some content');
  });
})