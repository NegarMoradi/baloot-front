import React from "react";
import { showCartModal } from '../../store/cartModal';
import { useDispatch, useSelector } from "react-redux";
import { userSelectors } from "../../store/user/selector";
import { cartSelectors } from "../../store/cart/selector";

const HeaderCart = () => {
    const user = useSelector(userSelectors.user)
    const cart = useSelector(cartSelectors.cart)

    const getCartLentgh = () => {
        return Object.values(cart).length;
    }
    const dispatch = useDispatch();
    const showCartDialog = () => {
        dispatch(showCartModal())
    }

    return (
        <div className="header-button align-items-center">
            <p className="username m-0">{user.username}</p>
            <a onClick={showCartDialog} className="btn d-flex justify-content-between align-items-center p-3">
                <p className="mb-0 cart-header">Cart</p>
                <p className="mb-0">{getCartLentgh()}</p>
            </a>
        </div>
    )
}

export default HeaderCart;