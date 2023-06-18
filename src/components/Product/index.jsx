import "./product.css";

import commafy from "../commafy";
import { useNavigate } from "react-router-dom";
import AddToCart from "../addToCart";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";

const Product = ({ product }) => {
  const navigate = useNavigate();


  const productAddToCart = document.getElementById("product-add-to-cart");
  productAddToCart?.addEventListener("click", (event) => {
    event.preventDefault();
  });

  return (
    <>
      <div className="col-xxl-3 col-xl-6 col-lg-6">
        <div className="item pt-3">
          <p
            onClick={() => navigate(`/commodities/${product.id}`)}
            className="item-title"
          >
            {product.name}
          </p>
          <p
            onClick={() => navigate(`/commodities/${product.id}`)}
            className="item-count"
          >
            {product.inStock} left in stock
          </p>
          <img
            onClick={() => navigate(`/commodities/${product.id}`)}
            src={product.image}
            alt="item"
          />
          <div
            id="product-add-to-cart"
            className="item-details d-flex justify-content-between align-items-center m-2"
          >
            <p className="mb-0">{commafy(product.price)}$</p>
            <AddToCart
              product={product}
              type="product"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
