
import './addToCart.css';

const AddToCart = ({onDecreaseCart, count, onIncreaseCart, id, onAddToCart, type}) => {
    return (
        type === 'item' ?
        <>
            {id ? 
            <div className="add-to-cart-button-little d-flex justify-content-between">
                <button className="bg-white border-0" onClick={onDecreaseCart}>-</button>
                    <p className='mb-0 mx-3'>{count}</p>
                <button className="bg-white border-0" onClick={onIncreaseCart}>+</button>   
            </div>
            : 
            <button className='add-to-cart-button-little' onClick={onAddToCart}>add to cart</button>}</> 
            :
        <>
            {id ? 
            <div className="add-to-cart-button d-flex">
                <button className="bg-white border-0" onClick={onDecreaseCart}>-</button>
                    <p className='mb-0 mx-5'>{count}</p>
                <button className="bg-white border-0" onClick={onIncreaseCart}>+</button>   
            </div>
            : 
            <button className='add-to-cart-button' onClick={onAddToCart}>add to cart</button>
            }      
        </>
    )
}

export default AddToCart;