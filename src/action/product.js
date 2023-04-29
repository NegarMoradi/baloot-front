import { productConstants } from '../constants';
import { productService } from '../server';

export const productActions = {
    getProductList,
    getProductListPage,
    getProductListSort,
    getProductListMinmax
};

function getProductList() {
    return dispatch => {
        dispatch(request())
        productService.getProductList()
            .then(
                res => {
                    console.log("products received")
                    dispatch(success(res.data));
                },
                error => {
                    dispatch(failure(error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                }
            );
    };

    function request() { console.log("into request"); return { type: productConstants.GET_PRODUCT_LIST_REQUEST } }
    function success(data) { console.log("into success"); return { type: productConstants.GET_PRODUCT_LIST_SUCCESS, data } }
    function failure(error) { return { type: productConstants.GET_PRODUCT_LIST_FAILURE, error } }
}

function getProductListPage(page) {
    return dispatch => {
        dispatch(request())
        productService.getProductListPage(page)
            .then(
                res => {
                    console.log("products received")
                    dispatch(success(res.data));
                },
                error => {
                    dispatch(failure(error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                }
            );
    };

    function request() { console.log("into request"); return { type: productConstants.GET_PRODUCT_LIST_REQUEST } }
    function success(data) { console.log("into success"); return { type: productConstants.GET_PRODUCT_LIST_SUCCESS, data } }
    function failure(error) { return { type: productConstants.GET_PRODUCT_LIST_FAILURE, error } }
}

function getProductListSort(sort) {
    return dispatch => {
        dispatch(request())
        productService.getProductListSort(sort)
            .then(
                res => {
                    console.log("products received")
                    dispatch(success(res.data));
                },
                error => {
                    dispatch(failure(error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                }
            );
    };

    function request() { console.log("into request"); return { type: productConstants.GET_PRODUCT_LIST_REQUEST } }
    function success(data) { console.log("into success"); return { type: productConstants.GET_PRODUCT_LIST_SUCCESS, data } }
    function failure(error) { return { type: productConstants.GET_PRODUCT_LIST_FAILURE, error } }
}

function getProductListMinmax(min, max) {
    return dispatch => {
        dispatch(request())
        productService.getProductListMinmax(min, max)
            .then(
                res => {
                    console.log("products received")
                    dispatch(success(res.data));
                },
                error => {
                    dispatch(failure(error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                }
            );
    };

    function request() { console.log("into request"); return { type: productConstants.GET_PRODUCT_LIST_REQUEST } }
    function success(data) { console.log("into success"); return { type: productConstants.GET_PRODUCT_LIST_SUCCESS, data } }
    function failure(error) { return { type: productConstants.GET_PRODUCT_LIST_FAILURE, error } }
}
