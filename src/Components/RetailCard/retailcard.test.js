import React from "react";
import RetailCard from "./index";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const component = shallow(<RetailCard />);
  expect(component).toMatchSnapshot();
});
