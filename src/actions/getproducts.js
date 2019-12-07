import urlPath from "../Config/axios";
import { GET_ALL_PRODUCTS_SUCCESS } from "./type";

const data = {
  filter: "offer_benefit_type eq 'Percentage'",
  select:
    "title, partner_name, thumbnail, stock_record_price_currency, stock_record_price_retail, offer_benefit_type, offer_benefit_value"
};
export const getProducts = product => {
  return dispatch => {
    return urlPath
      .request({
        method: "post",
        data: data
      })
      .then(response => {
        dispatch({
          type: GET_ALL_PRODUCTS_SUCCESS,
          payload: response.data.value
        });
      })
        
  };
};
