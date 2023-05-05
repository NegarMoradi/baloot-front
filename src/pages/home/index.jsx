
import HomeHeader from './components/Header';
import HomeSetting from './components/Setting';
import './home.css';
import Product from './components/Product';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../store/user/selector';
import UseApi from '../../hooks/api';

const Home = () => {

    const user = useSelector(userSelectors.user)
    const token = useSelector(userSelectors.token)
    const [commodities, setCommodities] = useState([]);
    const { apiCall } = UseApi();
    const onSuccess = (res) => {
        setCommodities(res.data.data);
    }

    const getCommoditiesApiCall = () => {
        const query = {
            "email": "john@mail.com",
            "password": "changeme"
        }

        apiCall({ url: "http://localhost:5432/api/commodities", query, method: 'get', sucessCallback: onSuccess })
    }

    useEffect(() => {
        getCommoditiesApiCall();
    }, [])

    useEffect(() => {
        console.log(user);
    }, [user])

    useEffect(() => {
        console.log(token);
    }, [token])
    return (

        <>
            <HomeHeader/>
            <div class="px-5 pt-5 home">
                <HomeSetting/>
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