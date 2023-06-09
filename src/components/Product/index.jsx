
import './product.css';

import commafy from '../commafy';
import { useNavigate } from 'react-router-dom';


const Product = ({product}) => {
    const navigate = useNavigate();

    const onAddToCart = () => {
        console.log("hi");
    }

    return(
        <div className="col-xxl-3 col-xl-6 col-lg-6" onClick={()=>navigate(`/commodities/${product.id}`)}>
            <div className="item pt-3">
                <p className="item-title">{product.name}</p>
                <p className="item-count">{product.inStock} left in stock</p>
                <img src={product.image} alt="item"/>
                <div className="item-details d-flex justify-content-between align-items-center m-2">
                    <p className="mb-0">{commafy(product.price)}$</p>
                    <button disabled={!product.inStock} onClick={onAddToCart}>add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product;