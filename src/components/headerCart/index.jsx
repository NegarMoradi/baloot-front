import React from "react";
import { showCartModal } from "../../store/cartModal";
import { useDispatch, useSelector } from "react-redux";
import { userSelectors } from "../../store/user/selector";
import { cartSelectors } from "../../store/cart/selector";
import "./headerCart.css";
import { useNavigate } from "react-router-dom";

const HeaderCart = () => {
  const user = useSelector(userSelectors.user);
  const cart = useSelector(cartSelectors.cart);
  const navigate = useNavigate();
  const getCartLength = () => {
    return Object.values(cart).reduce(
      (currentCount, item) => item?.count + currentCount,
      0
    );
  };
  const dispatch = useDispatch();
  const showCartDialog = () => {
    dispatch(showCartModal());
  };
  const cartNumber = getCartLength();

  const buttonClass = cartNumber > 0 ? "header-button-user" : "header-button";

  return (
    <div className={`d-flex align-items-center ${buttonClass}`}>
      <p onClick={() => navigate("/user")} className="header-username m-0">
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
