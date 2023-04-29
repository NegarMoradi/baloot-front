import { productConstants } from '../constants'

const initialState = {
    products: [],
    loading: false, 
    error: false
}


export function getProductList(state = initialState, action){
    
    switch (action.type) {
        case productConstants.GET_PRODUCT_LIST_REQUEST:
            return {
                ...state,
                loading: true, 
                error: false
            }
        case productConstants.GET_PRODUCT_LIST_SUCCESS:{
            return {
                ...state,
                products: action.data,
                loading: false, 
                error: false
            }
        }
            
        case productConstants.GET_PRODUCT_LIST_FAILURE:
            return {
                error: true,
                loading: false
            }
    
        default:
            return state;
    }
}