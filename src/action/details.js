import { detailsConstants } from '../constants';
import { detailsService } from '../server';

export const detailsActions = {
    getDetailsList,
};

function getDetailsList(id) {
    return dispatch => {
        dispatch(request())
        detailsService.getDetailsList(id)
            .then(
                res => {
                    console.log("details received")
                    dispatch(success(res.data));
                },
                error => {
                    dispatch(failure(error.toString()));
                    console.log("occur error");
                    console.log(error.toString());
                }
            );
    };

    function request() { console.log("into request"); return { type: detailsConstants.GET_DETAILS_LIST_REQUEST } }
    function success(data) { console.log("into success"); return { type: detailsConstants.GET_DETAILS_LIST_SUCCESS, data } }
    function failure(error) { return { type: detailsConstants.GET_DETAILS_LIST_FAILURE, error } }
}
