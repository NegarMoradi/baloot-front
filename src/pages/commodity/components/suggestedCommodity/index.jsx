import AddToCart from "../../../../components/addToCart"
import { useSelector, useDispatch  } from 'react-redux';
import { cartSelectors } from '../../../../store/cart/selector';
import { addToCart, increaseCart, decreaseCart } from '../../../../store/cart';

const SuggestedCommodity = ({suggestedCommodity}) => {
    const cart = useSelector(cartSelectors.cart)
    const dispatch = useDispatch()

    const onAddToCart = () => {
        dispatch(addToCart(suggestedCommodity))
    }

    const onIncreaseCart = () => {
        dispatch(increaseCart(suggestedCommodity.id))
    }

    const onDecreaseCart = () => {
        dispatch(decreaseCart(suggestedCommodity.id))
    }
    return (
        <div className="suggested-item pt-3">
            <p className="item-title">{suggestedCommodity.name}</p>
            <p className="item-count">{suggestedCommodity.inStock} left in stock</p>
            <img className="w-100" src={suggestedCommodity.image} alt="suggested commodity"/>
            <div className="suggested-item-details d-flex justify-content-between align-items-center m-2 mt-4">
                <p className="m-0">{suggestedCommodity.price}$</p>
                <AddToCart type='item' onAddToCart={onAddToCart} onDecreaseCart={onDecreaseCart} onIncreaseCart={onIncreaseCart} count={cart[suggestedCommodity.id]?.count} id={cart[suggestedCommodity.id]}/>
            </div>
        </div>
    )
}

export default SuggestedCommodity;