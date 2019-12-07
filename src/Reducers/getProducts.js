import { GET_ALL_PRODUCTS_SUCCESS } from '../actions/type';

const initialState = {
    products: {}
}


export const getProducts = (state = initialState, action) => {
   
    
    switch (action.type) {
        
      case  GET_ALL_PRODUCTS_SUCCESS:
        return {
          ...state,
          products: action.payload,
        
            };
        
            default:
                return state;
    }
    
}
