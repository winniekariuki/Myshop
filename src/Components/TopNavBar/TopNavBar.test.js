import React from "react";
import TopNavBar from "./index";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const component = shallow(<TopNavBar />);
  expect(component).toMatchSnapshot();
});
