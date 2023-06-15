import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../pages/home';
import Login from '../pages/login';
import Commodity from '../pages/commodity';
import Provider from '../pages/provider';
import User from '../pages/user/user';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path='commodities/:id' element={<Commodity/>}/>
                <Route path='/providers/:id' element={<Provider/>}/>
                <Route path='/user' element={<User/>}/>
            </Routes>
        </Router>
    )
}

export default Routing;