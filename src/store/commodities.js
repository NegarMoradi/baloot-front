import { commoditiesConstants } from '../constants'

const initialState = {
    commodities: [],
    loading: false, 
    error: false
}

const getCommoditiesList = (state = initialState, action) => {
    
    switch (action.type) {
        case commoditiesConstants.GET_DETAILS_LIST_REQUEST:
            return {
                ...state,
                loading: true, 
                error: false
            }
        case commoditiesConstants.GET_DETAILS_LIST_SUCCESS:{
            return {
                ...state,
                commodities: action.data,
                loading: false, 
                error: false
            }
        }
            
        case commoditiesConstants.GET_DETAILS_LIST_FAILURE:
            return {
                error: true,
                loading: false
            }
    
        default:
            return state;
    }
}

export default getCommoditiesList;