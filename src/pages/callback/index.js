import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Callback = () => {
    const [query] = useSearchParams();

    useEffect(() => {
        const code = query.get("code");
        if(code) {
            console.log("code", code);
        }
    }, [query])

    
    return (
        <></>
    )
}

export default Callback;