
import "./setting.css";
import UseApi from "../../../../hooks/api";
import { useState } from "react";

const HomeSetting = ({ onSort }) => {
  const { apiCall } = UseApi();
  const [buttonClick, setButtonClick] = useState("name");
  const [availableCommodity, setAvailableCommodity] = useState(false);
  const onSuccess = (res) => {
    onSort(res.data.data);
  };

  const getCommoditiesApiCall = (query) => {
    apiCall({
      url: "http://localhost:5432/api/commodities",
      query,
      method: "get",
      sucessCallback: onSuccess,
    });
  };

  const onSelectSort = (type) => {
    const query = {};
    if (type === "price") {
      query.action = "sort_by_price";
    }
    getCommoditiesApiCall(query);
  };

  const onSelectAvailableCommodity = () => {
    const query = {};
    query.available_commodities = availableCommodity;
    getCommoditiesApiCall(query);
  };

  const nameButtonClickStyle =
    buttonClick === "price" ? "name-button" : "name-button-click";
  const priceButtonClickStyle =
    buttonClick === "price" ? "price-button" : "price-button-click";

  return (
    <div className="setting d-flex  justify-content-between">
      <div className="sort d-flex align-items-center">
        <p className="mb-0">sort by:</p>
        <button
          className={nameButtonClickStyle}
          onClick={() => {
            onSelectSort("name");
            setButtonClick("name");
          }}
        >
          name
        </button>
        <button
          className={priceButtonClickStyle}
          onClick={() => {
            onSelectSort("price");
            setButtonClick("price");
          }}
        >
          price
        </button>
      </div>
      <div className="availableCommodities d-flex align-items-center">
        <p className="mb-0">Available commodities</p>
        <div className="form-check form-switch available-commodities">
          <input
            className="form-check-input available-commodities"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={(e) => {
              setAvailableCommodity(!e.target.checked);
              onSelectAvailableCommodity();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSetting;
