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

// it('should call event handler', () => {
//     const value = '2';
//     const onChange = jest.fn();
//     const wrapper = shallow(
//         <Component onChange={onChange} />
//     );
//
//     expect(wrapper).toMatchSnapshot();
//
//     wrapper.find('select').simulate('change', {
//         target: { value },
//     });
//
//     expect(onChange).toBeCalledWith(value);
// });
