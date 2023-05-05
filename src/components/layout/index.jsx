import React from 'react';
import Routing from '../../routing';
import Footer from './footer';
import Header from './header';

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <Routing />
            <Footer />
        </div>
    )
}

export default Layout