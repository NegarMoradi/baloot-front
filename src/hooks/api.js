import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userClear } from '../store/user';
import { Toaster, toast } from "react-hot-toast";

const UseApi = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const navigate = useNavigate()

    const apiCall = ({ url, query, method, sucessCallback, failedCallback }) => {
        setLoading(true);
        const params = query ?? {};
        const axiosOptions = {
            url,
            method: method ?? "get"
        }
        if(method ==="post" || method === "delete") {
            axiosOptions.data = params
        } else {
            axiosOptions.params = params
        }
        axios(axiosOptions)
            .then(function (response) {
                // handle success
                sucessCallback?.(response);
            })
            .catch(function (error) {
                // handle error
                if(error?.response?.status === 401) {
                    navigate("/login")
                    dispatch(userClear())
                }
                if(error?.response?.data?.data){
                    toast(error?.response?.data?.data)
                }
                failedCallback?.(error);
            })
            .finally(function () {
                // always executed
                setLoading(false)
            });
    }

    return { loading, apiCall };
}

export default UseApi;