import React from 'react';
import { hideCartModal } from '../../store/cartModal';
import { useDispatch } from 'react-redux';

const CartModal = () => {

    const dispatch = useDispatch();

    const closeModal = () => {
        console.log("close");
        dispatch(hideCartModal())
    }

    return (
        <div style={{position: "fixed", bottom: 0}}>
            <button onClick={closeModal}>Close</button>
            cartModal
        </div>
    )
}

export default CartModal;