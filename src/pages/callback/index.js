import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import UseApi from '../../hooks/api';
import { useDispatch } from 'react-redux';
import { setToken } from '../../store/user/token';

const Callback = () => {
    const [query] = useSearchParams();
    const { apiCall } = UseApi();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const code = query.get("code");
        if(code) {
            callbackApiCall(code)
        }
    }, [query])


    const onSuccessCallback = (res) => {
        if(res.data.status === 200){
            dispatch(
                setToken({
                jwtToken: res.data.data,
                })
            );
            navigate("/")
        }
    }
    const callbackApiCall = (code) => {
        apiCall({
          url: "http://localhost:5432/api/callback/",
          query: {code: code},
          method: "post",
          sucessCallback: onSuccessCallback,
        });
      };
    
    return (
        <></>
    )
}

export default Callback;