import React from "react";
import App from "./app";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

let component;

beforeEach(() => {
  component = shallow(<App />);
});

test("<App /> renders correctly", () => {
  expect(toJson(component)).toMatchSnapshot();
});

test("Clicking on next place button should increment currentPlaceIndex", () => {
  expect(component.instance().state.currentPlaceIndex).toEqual(0);
  component.find("button").simulate("click");
  expect(component.instance().state.currentPlaceIndex).toEqual(1);
});
