import React from "react";
import CardCustomer from "./index";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const component = shallow(<CardCustomer />);
  expect(component).toMatchSnapshot();
});
