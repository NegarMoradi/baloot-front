import { combineReducers } from "redux";
import { getProductList } from "./product";
import { getDetailsList } from "./details";

export default combineReducers({
    getProductList,
    getDetailsList
});
