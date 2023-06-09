import React from 'react';
import './styles.css';
import ballot from '../../assets/png/Baloot.png';
const Header = () => {
    return (
        <header className="d-flex">
        <div className="header-button align-items-center">
            <p className="username m-0">#username</p>
            <a href="#" className="btn d-flex justify-content-between align-items-center p-3">
                <p className="mb-0 cart">Cart</p>
                <p className="mb-0">0</p>
            </a>
        </div>
        <a href="./home.html" className="logo">
            <img src={ballot} alt="Baloot logo"/>
        </a>
    </header>
    )
}

export default Header;