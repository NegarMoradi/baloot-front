import React from 'react';
import './styles.css';
import baloot from '../../assets/png/Baloot.png';
const Header = ({ username, cart }) => {

    const pathname = window.location.pathname;

    return (
        pathname === '/'  ?
        null : 
        pathname === '/login' ?        
        <header className="logo">
            <a href="./">
                <img src={baloot} alt="Baloot logo"/>
            </a>
        </header> :
        pathname === '/user' ? null 
        :
        <header className="d-flex">

        <a href="./home.html" className="logo">
            <img src={baloot} alt="Baloot logo"/>
        </a>
    </header>
    )
}

export default Header;