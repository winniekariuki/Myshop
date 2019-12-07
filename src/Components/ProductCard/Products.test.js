import React from "react";
import ProductCard from "./index";
import { shallow , mount} from "enzyme";


const product = {
  offer_benefit_value: 20,
  title: "Cloath",
  partner_name: "octo",
  stock_record_price_retail: 50,
  stock_record_price_currency: "ksh"
};

it("renders without crashing", () => {
  const component = mount(<ProductCard product={product}/>);
  expect(component).toMatchSnapshot();
});
