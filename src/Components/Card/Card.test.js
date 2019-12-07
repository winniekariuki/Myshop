import React from "react";
import Card from "./index";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const component = shallow(<Card />);
  expect(component).toMatchSnapshot();
});
