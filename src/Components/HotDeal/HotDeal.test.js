import React from "react";
import HotDeals from "./index";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const component = shallow(<HotDeals />);
  expect(component).toMatchSnapshot();
});
