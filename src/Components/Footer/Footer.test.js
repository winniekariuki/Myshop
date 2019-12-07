import React from "react";
import Footer from "./index";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const component = shallow(<Footer />);
  expect(component).toMatchSnapshot();
});
