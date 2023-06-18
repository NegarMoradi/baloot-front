import star from "../../../../assets/icons/star.svg";
import stars from "../../../../assets/png/stars.png";
import AddToCart from "../../../../components/addToCart";
import { useNavigate } from "react-router-dom";
const CommodityDetail = ({ commodity, provider }) => {
  const navigate = useNavigate();

  return (
    <div className="row g-0">
      <div className="col-lg-6">
        <img className="item-image w-100" src={commodity.image} alt="item" />
      </div>
      <div className="col-lg-6">
        <div className="px-4">
          <p className="title px-2 pt-3">{commodity.name}</p>
          <div className="d-flex justify-content-between">
            <p className="count px-2">{commodity.inStock} left in stock</p>
            <div className="d-flex align-items-center">
              <img src={star} alt="star icon" />
              <div className="d-flex align-items-end">
                <p className="item-point m-0">{commodity.rating}</p>
                {/* <p className="item-comments m-0">(12{commodity.comments['amir'].length})</p> */}
                <p className="item-comments m-0">(12)</p>
              </div>
            </div>
          </div>
          <p className="item-brand px-2">
            by{" "}
            <span
              onClick={() => navigate(`/providers/${commodity?.providerId}`)}
              className="brand"
            >
              {provider?.name}
            </span>
          </p>
          <p className="category px-2">Category(s)</p>
          <ul className="category mx-2">
            {commodity.categories?.map((category, index) => {
              return <li key={index}>{category}</li>;
            })}
          </ul>
        </div>
        <div className="add-to-cart d-flex justify-content-between align-items-center">
          <p className="m-0">{commodity?.price}$</p>
          <AddToCart
            product={commodity}
          />
        </div>
        <div className="rate row align-items-center">
          <div className="col-xxl-8">
            <p>rate now</p>
            <div className="d-flex">
              <img src={stars} alt="points" />
              <img src={stars} alt="points" />
            </div>
          </div>
          <div className="col-xxl-4">
            <button className="submit-button p-3 border-0">submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommodityDetail;
