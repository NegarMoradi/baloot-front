import HomeHeader from "./components/Header";
import HomeSetting from "./components/Setting";
import "./home.css";
import Product from "../../components/Product";
import React, { useEffect, useState } from "react";
import UseApi from "../../hooks/api";
import Pagination from "../../components/pagination";

const Home = () => {
  const [commodities, setCommodities] = useState([]);
  const [showedItems, setShowedItems] = useState([]);
  const { apiCall } = UseApi();
  const onSuccess = (res) => {
    setCommodities(res.data.data);
  };
  const getCommoditiesApiCall = () => {
    const query = {};

    apiCall({
      url: "http://localhost:5432/api/commodities",
      query,
      method: "get",
      sucessCallback: onSuccess,
    });
  };

  useEffect(() => {
    getCommoditiesApiCall();
  }, []);

  useEffect(() => {
    console.log(commodities);
  }, [commodities]);
  return (
    <>
      <HomeHeader onSearch={setCommodities} />
      <div className="px-5 pt-5 home">
        <HomeSetting onSort={setCommodities} />
        <div className="items">
          <div className="row">
            {showedItems.map((product, index) => {
              return <Product key={index} product={product} />;
            })}
          </div>
          {commodities.length && (
            <Pagination
              itemsPerPage={12}
              items={commodities}
              setCurrentItems={setShowedItems}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
