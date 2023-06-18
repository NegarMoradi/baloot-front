import React from "react";
import { showCartModal } from "../../store/cartModal";
import { useDispatch, useSelector } from "react-redux";
import { userSelectors } from "../../store/user/selector";
import { cartSelectors } from "../../store/cart/selector";
import "./headerCart.css";

const HeaderCart = () => {
  const user = useSelector(userSelectors.user);
  const cart = useSelector(cartSelectors.cart);
  const getCartLentgh = () => {
    return Object.values(cart)[0]?.count;
  };
  const dispatch = useDispatch();
  const showCartDialog = () => {
    dispatch(showCartModal());
  };
  const cartNumber = getCartLentgh();

  const buttonClass = cartNumber > 0 ? "header-button-user" : "header-button";

  return (
    <div className={`d-flex align-items-center ${buttonClass}`}>
      <p
        onClick={() => window.location.replace("http://localhost:3000/user")}
        className="header-username m-0"
      >
        {user.username}
      </p>
      <button
        onClick={showCartDialog}
        className="d-flex justify-content-between align-items-center p-3"
      >
        <p className="mb-0 cart-header">Cart</p>
        <p className="mb-0">{cartNumber}</p>
      </button>
    </div>
  );
};

export default HeaderCart;
