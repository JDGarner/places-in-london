import React from 'react';
import Place from './place';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('<Place /> renders correctly', () => {
  const tree = shallow(
    <Place name="Park"/>
  );

  expect(toJson(tree)).toMatchSnapshot();
});
