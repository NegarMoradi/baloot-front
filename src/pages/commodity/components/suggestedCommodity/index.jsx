import { useNavigate } from "react-router-dom";
import AddToCart from "../../../../components/addToCart";

const SuggestedCommodity = ({ suggestedCommodity }) => {
  const navigate = useNavigate();

  return (
    <div className="suggested-item pt-3">
      <p
        onClick={() => navigate(`/commodities/${suggestedCommodity.id}`)}
        className="item-title"
      >
        {suggestedCommodity.name}
      </p>
      <p
        onClick={() => navigate(`/commodities/${suggestedCommodity.id}`)}
        className="item-count"
      >
        {suggestedCommodity.inStock} left in stock
      </p>
      <img
        onClick={() => navigate(`/commodities/${suggestedCommodity.id}`)}
        className="w-100"
        src={suggestedCommodity.image}
        alt="suggested commodity"
      />
      <div className="suggested-item-details d-flex justify-content-between align-items-center m-2 mt-4">
        <p className="m-0">{suggestedCommodity.price}$</p>
        <AddToCart type="item" product={suggestedCommodity} />
      </div>
    </div>
  );
};

export default SuggestedCommodity;
