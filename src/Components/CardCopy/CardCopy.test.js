import React from "react";
import CardCopy from "./index";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const component = shallow(<CardCopy />);
  expect(component).toMatchSnapshot();
});
