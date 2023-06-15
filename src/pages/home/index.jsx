
import HomeHeader from './components/Header';
import HomeSetting from './components/Setting';
import './home.css';
import Product from '../../components/Product';
import React, { useEffect, useState } from 'react';
import UseApi from '../../hooks/api';

const Home = () => {

    const [commodities, setCommodities] = useState([]);
    const { apiCall } = UseApi();
    const onSuccess = (res) => {
        setCommodities(res.data.data);
    }
    const getCommoditiesApiCall = () => {
        const query = {}

        apiCall({ url: "http://localhost:5432/api/commodities", query, method: 'get', sucessCallback: onSuccess })
    }

    useEffect(() => {
        getCommoditiesApiCall();
    }, [])
    return (

        <>
            <HomeHeader onSearch={setCommodities}/>
            <div className="px-5 pt-5 home">
                <HomeSetting onSort={setCommodities}/>
                <div className='items'>
                    <div className='row'>
                        {commodities?.map((product, index) => {
                            return <Product key={index} product={product}/>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;