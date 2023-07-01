import { useDispatch, useSelector } from "react-redux";
import "./addToCart.css";
import { addOneToCart, decreaseCart, increaseCart } from "../../store/cart";
import { cartSelectors } from "../../store/cart/selector";
import UseApi from "../../hooks/api";

const AddToCart = ({ product, type }) => {
  const buttonSize =
    type === "item"
      ? "add-to-cart-button-little"
      : type === "product"
      ? "add-to-cart-button-small"
      : "add-to-cart-button";
  const cart = useSelector(cartSelectors.cart);
  const { apiCall } = UseApi();
  const dispatch = useDispatch();

  const postAddCart = () => {
    apiCall({
      url: `http://localhost:5432/api/users/buyList`,
      query: { commodityId: product.id },
      method: "post",
      sucessCallback: () => {},
    });
  };

  const postRemoveCart = () => {
    apiCall({
      url: `http://localhost:5432/api/users/buyList`,
      query: { commodityId: product.id },
      method: "delete",
      sucessCallback: ({ data }) => {
        console.log(data.data);
      },
    });
  };

  const onAddToCart = () => {
    postAddCart();
    dispatch(addOneToCart(product));
  };

  const onIncreaseCart = () => {
    postAddCart();
    dispatch(increaseCart(product.id));
  };

  const onDecreaseCart = () => {
    postRemoveCart();
    dispatch(decreaseCart(product.id));
  };

  const isProductInCart = () => {
    return !!cart[product.id];
  };
  return (
    <>
      {isProductInCart() ? (
        <div
          className={`d-flex justify-content-between align-items-center ${buttonSize}`}
        >
          <button className="bg-white border-0" onClick={onDecreaseCart}>
            -
          </button>
          <p className="mb-0 mx-1">{cart[product.id]?.count}</p>
          <button className="bg-white border-0" onClick={onIncreaseCart}>
            +
          </button>
        </div>
      ) : (
        <button className={buttonSize} onClick={onAddToCart}>
          add to cart
        </button>
      )}
    </>
  );
};

export default AddToCart;
