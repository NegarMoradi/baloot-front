import { detailsConstants } from '../constants'

const initialState = {
    details: [],
    loading: false, 
    error: false
}


export function getDetailsList(state = initialState, action){
    
    switch (action.type) {
        case detailsConstants.GET_DETAILS_LIST_REQUEST:
            return {
                ...state,
                loading: true, 
                error: false
            }
        case detailsConstants.GET_DETAILS_LIST_SUCCESS:{
            console.log("details")
            return {
                ...state,
                details: action.data,
                loading: false, 
                error: false
            }
        }
            
        case detailsConstants.GET_DETAILS_LIST_FAILURE:
            return {
                error: true,
                loading: false
            }
    
        default:
            return state;
    }
}