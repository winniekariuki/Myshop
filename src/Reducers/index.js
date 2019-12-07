import { combineReducers } from 'redux';
import { getProducts } from './getProducts';

const rootReducer = combineReducers({
    products: getProducts
})
export default rootReducer;