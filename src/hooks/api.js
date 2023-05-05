import axios from 'axios';
import { useState } from 'react';

const UseApi = () => {
    const [loading, setLoading] = useState(false);

    const apiCall = ({ url, query, method, sucessCallback, failedCallback }) => {
        setLoading(true);

        method = method ?? "get";
        query = query ?? {};

        axios[method](url, query)
            .then(function (response) {
                // handle success
                sucessCallback?.(response);
            })
            .catch(function (error) {
                // handle error
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