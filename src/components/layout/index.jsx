import React, { useEffect } from 'react';
import Routing from '../../routing';
import Footer from './footer';
import Header from './header';
import CartModal from '../cartModal';
import { cartModalSelectors } from '../../store/cartModal/selector';
import { useSelector } from 'react-redux';

const Layout = ({children}) => {

    const cartModalStatus = useSelector(cartModalSelectors.cartModal)

useEffect(() => {
    console.log('cartModalStatus');
    console.log(cartModalStatus);
},[cartModalStatus])
    return (
        <div>
            <Header />
            <Routing />
            <Footer />

            {cartModalStatus && <CartModal />}
        </div>
    )
}

export default Layout