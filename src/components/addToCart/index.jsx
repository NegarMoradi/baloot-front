import "./addToCart.css";

const AddToCart = ({
  onDecreaseCart,
  count,
  onIncreaseCart,
  id,
  onAddToCart,
  type,
}) => {
  const buttonSize =
    type === "item"
      ? "add-to-cart-button-little"
      : type === "product"
      ? "add-to-cart-button-small"
      : "add-to-cart-button";
  return (
    <>
      {id ? (
        <div
          className={`d-flex justify-content-between align-items-center ${buttonSize}`}
        >
          <button className="bg-white border-0" onClick={onDecreaseCart}>
            -
          </button>
          <p className="mb-0 mx-3">{count}</p>
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
