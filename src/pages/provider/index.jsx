import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { userSelectors } from '../../store/user/selector';
import UseApi from '../../hooks/api';
import './provider.css';

const Provider = () => {
    const { id } = useParams();
    const user = useSelector(userSelectors.user)
    const [provider, setProvider] = useState([]);
    const { apiCall } = UseApi();
    const onSuccessProviders = (res) => {
        setProvider(res.data.data);
    }
    const getProviderApiCall = () => {
        const query = {
            "username": user.username,
            "password": user.password
        }

        apiCall({ url: `http://localhost:5432/api/providers/${id}`, query, method: 'get', sucessCallback: onSuccessProviders })
    }
    useEffect(() => {
        getProviderApiCall();
      }, [id])
    return (
        <div className="mt-5 main-provider">
            <div className="mx-5">
                <img src={provider.image} alt="provider"/>
                <p className="pt-3 provider-date d-flex justify-content-end">since {provider.registryDate}</p>
                <p className="provider-name d-flex justify-content-start">{provider.name}</p>
            </div>
            <div className="provided-commodities mt-5">
                <p className="provided-commodities-title pt-4 d-flex justify-content-start">All provided commodities</p>
                <div className="more-items mx-5 mt-3 mb-5">
        {/* {suggestedCommodities && 
            <>
                <p className="py-5">You also might like...</p>
                <div className="row g-5 more-item">
                    {suggestedCommodities.map((suggestedCommodity, index) => {
                        return(
                            <SuggestedCommodity key={index} suggestedCommodity={suggestedCommodity}/>
                        )
                    })}
                </div>
            </>
        }    */}
       </div>
            </div>
        </div>
    )
}

export default Provider;