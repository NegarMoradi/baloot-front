import React from 'react';
import './styles.css';
import baloot from '../../assets/png/Baloot.png';
import { userSelectors } from '../../store/user/selector';
import { useDispatch, useSelector } from 'react-redux';
import { showCartModal } from '../../store/cartModal';
const Header = ({ username, cart }) => {

    const user = useSelector(userSelectors.user)
    const pathname = window.location.pathname;
    const dispatch = useDispatch();
    const showCartDialog = () => {
        dispatch(showCartModal())
    }
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
        <div className="header-button align-items-center">
            <p className="username m-0">{user.name}</p>
            <a onClick={showCartDialog} className="btn d-flex justify-content-between align-items-center p-3">
                <p className="mb-0 cart-header">Cart</p>
                <p className="mb-0">{cart}0</p>
            </a>
        </div>
        <a href="./home.html" className="logo">
            <img src={baloot} alt="Baloot logo"/>
        </a>
    </header>
    )
}

export default Header;