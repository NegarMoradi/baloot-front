import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from '../pages/home';
import Login from '../pages/login';
import Commodity from '../pages/commodity';
import Provider from '../pages/provider';
import User from '../pages/user/user';
import Callback from '../pages/callback';

const Routing = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path='commodities/:id' element={<Commodity/>}/>
                <Route path='/providers/:id' element={<Provider/>}/>
                <Route path='/user' element={<User/>}/>
                <Route path='/api/callback' element={<Callback />} />
            </Routes>
    )
}

export default Routing;