import React from "react";
import Routing from "../../routing";
import Footer from "./footer";
import Header from "./header";
import CartModal from "../cartModal";
import { cartModalSelectors } from "../../store/cartModal/selector";
import { useSelector } from "react-redux";
import GetUserData from "./getUserData";

const Layout = ({ children }) => {
  const cartModalStatus = useSelector(cartModalSelectors.cartModal);

  return (
    <div>
      <GetUserData />
      <Header />
      <Routing />
      <Footer />
      {cartModalStatus && <CartModal />}
    </div>
  );
};

export default Layout;
