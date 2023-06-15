import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UseApi = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const apiCall = ({ url, query, method, sucessCallback, failedCallback }) => {
        setLoading(true);
        const params = query ?? {};
        const axiosOptions = {
            url,
            method: method ?? "get"
        }
        if(method ==="post") {
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
                    // Toast(error.response.data)
                    navigate("/login")
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