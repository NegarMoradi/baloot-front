import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../../store/user';
import { addMultiToCart } from '../../store/cart';
import UseApi from '../../hooks/api';

const GetUserData = () => {

    const dispatch = useDispatch();
    const {apiCall} = UseApi();

    const onGetUserDataSuccess = (res) => {
        dispatch(setUserInfo(res.data.data));
        dispatch(addMultiToCart(res.data.data.buyList));
    };
    
    const getUserData = () => {
        const query = {};
        apiCall({
            url: "http://localhost:5432/api/users/loggedInUser",
            query,
            method: "get",
            sucessCallback: onGetUserDataSuccess,
        });
    };

    useEffect(() => {
        getUserData();
    }, [])
    
    return (
        <>
        </>
    )
}

export default GetUserData;