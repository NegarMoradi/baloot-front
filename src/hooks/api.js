import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UseApi = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const apiCall = ({ url, query, method, sucessCallback, failedCallback }) => {
        setLoading(true);
        const newMethod = method ?? "get";
        const params = query ?? {};
        axios[newMethod](url, params)
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