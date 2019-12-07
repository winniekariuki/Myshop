import urlPath from '../Config/axios';
import axios from 'axios';
import { GET_ALL_PRODUCTS_SUCCESS} from './type'


const data = {
filter: "offer_benefit_type eq 'Percentage'",
select:
  "title, partner_name, thumbnail, stock_record_price_currency, stock_record_price_retail, offer_benefit_type, offer_benefit_value"
};
export const getProducts = postData => async (dispatch) => {
    await axios
.post(urlPath, data)
.then(response => {
    dispatch({
      type:GET_ALL_PRODUCTS_SUCCESS,
    isLoading: false,
    products: response.data.value
  });
})
.catch(error => {
  dispatch("An error occurred", error);
});
}


