import React, {Component} from "react";
import LandingPage from "./index";
import { shallow, mount } from "enzyme";

it("renders without crashing", () => {
  const component = shallow(<LandingPage />);
  expect(component).toMatchSnapshot();
});

it("should update state when the load more button is clicked", () => {
  const component = mount(<LandingPage />);
  component.find("button.btn").simulate("click");

  expect(component.state("visible")).toEqual(24);
  component.unmount();
});
