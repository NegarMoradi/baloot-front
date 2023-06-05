import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../pages/home';
import Login from '../pages/login';
import Commodity from '../pages/commodity';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path='commodities/' element={<Commodity/>}/>
            </Routes>
        </Router>
    )
}

export default Routing;