import React, { useEffect, useState } from "react";
import NameIcon from "../../assets/icons/name";
import EmailIcon from "../../assets/icons/email";
import BirthDateIcon from "../../assets/icons/birthDate";
import AddressIcon from "../../assets/icons/address.svg";
import DollarSignIcon from "../../assets/icons/dollarSign.svg";
import BasketIcon from "../../assets/icons/basket.svg";
import HistoryIcon from "../../assets/icons/history";
import UseApi from "../../hooks/api";
import { useDispatch, useSelector } from "react-redux";
import { userSelectors } from "../../store/user/selector";
import "./user.css";
import { userClear } from "../../store/user";
import AddCreditModal from "../../components/addCreditModal";
import { showCartModal } from "../../store/cartModal";
import { useNavigate } from "react-router-dom";
import AddToCart from "../../components/addToCart";
import { cartModalSelectors } from "../../store/cartModal/selector";

const User = () => {
  const user = useSelector(userSelectors.user);
  const showCartModalStatus = useSelector(cartModalSelectors.cartModal);
  const dispatch = useDispatch();
  const { apiCall } = UseApi();
  const [buyList, setBuyList] = useState([]);
  const [addCreditModalState, setAddCreditModalState] = useState(false);
  const [creditSuccess, setCreditSuccess] = useState(false);
  const [creditInput, setCreditInput] = useState("");
  const [purchasedList, setPurchasedList] = useState([]);
  const navigate = useNavigate();
  const onSuccessLogout = () => {
    dispatch(userClear());
    navigate("/");
    // window.location.replace("http://localhost:3000/");
  };

  const showCartDialog = () => {
    dispatch(showCartModal());
  };

  const onSuccessBuyList = (res) => {
    setBuyList(res.data.data);
  };

  const onSuccessPurchasedList = (res) => {
    setPurchasedList(res.data.data);
  };

  const logoutApiCall = () => {
    apiCall({
      url: "http://localhost:5432/api/users/logout",
      query: {},
      method: "post",
      sucessCallback: onSuccessLogout,
    });
  };

  const getBuyListApiCall = () => {
    const query = {};

    apiCall({
      url: "http://localhost:5432/api/users/buyList",
      query,
      method: "get",
      sucessCallback: onSuccessBuyList,
    });
  };

  const getPurchasedListApiCall = () => {
    const query = {};

    apiCall({
      url: "http://localhost:5432/api/users/purchasedList",
      query,
      method: "get",
      sucessCallback: onSuccessPurchasedList,
    });
  };

  useEffect(() => {
    getBuyListApiCall();
    getPurchasedListApiCall();
  }, [user]);

  useEffect(() => {
    if (!showCartModalStatus) {
      getBuyListApiCall();
      getPurchasedListApiCall();
    }
  }, [showCartModalStatus]);
  return (
    <>
      <div>
        <div className="mt-5 main-user">
          <div className="user d-xxl-flex justify-content-between">
            <div className="d-flex flex-column justify-content-between">
              <div className="user-details">
                <div className="d-flex align-items-center mb-3">
                  <NameIcon />
                  <p className="mb-0 mx-4">{user.username}</p>
                </div>
                <div className="d-flex align-items-center">
                  <EmailIcon />
                  <p className="mb-0 mx-4">{user.email}</p>
                </div>
                <div className="d-flex align-items-center my-3">
                  <BirthDateIcon />
                  <p className="mb-0 mx-4">{user.birthDate}</p>
                </div>
                <div className="user-address d-flex align-items-center">
                  <img className="pl-1" src={AddressIcon} alt="user address" />
                  <p className="mb-0 mx-4">{user.address}</p>
                </div>
              </div>
              <button
                onClick={() => logoutApiCall()}
                className="logout user-card-button"
              >
                logout
              </button>
            </div>
            <div className="user-credit d-flex flex-column my-1 align-items-center">
              <div className="d-flex">
                <img className="mx-2" src={DollarSignIcon} alt="dollar sign" />
                <p className="mb-0 mx-1">
                  {!creditSuccess ? user.credit : user.credit + +creditInput}
                </p>
              </div>
              <input
                className="my-3 px-4 w-100"
                type="text"
                placeholder="$Amount"
                onChange={(e) => {
                  setCreditInput(e.target.value);
                }}
              />
              <button
                data-toggle="modal"
                data-target="#addCreditModal"
                className="my-1 w-100 user-card-button"
                onClick={() => {
                  setAddCreditModalState(true);
                }}
              >
                Add More Credit
              </button>
            </div>
          </div>
          <div className="user-cart text-center">
            <div className="d-flex cart-title">
              <img src={BasketIcon} alt="user-carticon" />
              <p className="m-1">Cart</p>
            </div>
            <table>
              <thead className="categories align-items-center">
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Categories</th>
                  <th scope="col">Price</th>
                  <th scope="col">Provider ID</th>
                  <th scope="col">Rating</th>
                  <th scope="col">In Stock</th>
                  <th scope="col">In Cart</th>
                </tr>
              </thead>
              <tbody>
                {buyList?.map((item) => {
                  return (
                    <tr className="user-item-details">
                      <td data-label="Image">
                        <img
                          src={item.commodity.image}
                          className="mb-0"
                          alt="item"
                        />
                      </td>
                      <td data-label="Name">
                        <p className="mb-0">{item.commodity.name}</p>
                      </td>
                      <td data-label="Categories">
                        <p className="mb-0">
                          {item.commodity.categories.join(", ")}
                        </p>
                      </td>
                      <td data-label="Price">
                        <p className="mb-0">${item.commodity.price}</p>
                      </td>
                      <td data-label="Provider ID">
                        <p className="mb-0">{item.commodity.providerId}</p>
                      </td>
                      <td data-label="Rating">
                        <p className="mb-0 rating">{item.commodity.rating}</p>
                      </td>
                      <td data-label="In Stock">
                        <p className="mb-0 in-stock">
                          {item.commodity.inStock}
                        </p>
                      </td>
                      <td data-label="In Cart" className="in-cart-td">
                        <AddToCart product={item.commodity} type="product" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button
              onClick={showCartDialog}
              className="py-3 w-50 user-card-button"
            >
              Pay now!
            </button>
          </div>
          <div className="history text-center">
            <div className="d-flex cart-title align-items-center">
              <HistoryIcon />
              <p className="m-1">History</p>
            </div>
            <table>
              <thead className="categories align-items-center">
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Categories</th>
                  <th scope="col">Price</th>
                  <th scope="col">Provider ID</th>
                  <th scope="col">Rating</th>
                  <th scope="col">In Stock</th>
                  <th scope="col">In Cart</th>
                </tr>
              </thead>
              <tbody>
                {buyList?.map((item) => {
                  return (
                    <tr className="user-item-details">
                      <td data-label="Image">
                        <img
                          src={item.commodity.image}
                          className="mb-0"
                          alt="item"
                        />
                      </td>
                      <td data-label="Name">
                        <p className="mb-0">{item.commodity.name}</p>
                      </td>
                      <td data-label="Categories">
                        <p className="mb-0">
                          {item.commodity.categories.join(", ")}
                        </p>
                      </td>
                      <td data-label="Price">
                        <p className="mb-0">${item.commodity.price}</p>
                      </td>
                      <td data-label="Provider ID">
                        <p className="mb-0">{item.commodity.providerId}</p>
                      </td>
                      <td data-label="Rating">
                        <p className="mb-0 rating">{item.commodity.rating}</p>
                      </td>
                      <td data-label="In Stock">
                        <p className="mb-0 in-stock">
                          {item.commodity.inStock}
                        </p>
                      </td>
                      <td data-label="In Cart" className="in-cart-td">
                        <AddToCart product={item.commodity} type="product" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button
              onClick={showCartDialog}
              className="py-3 w-50 user-card-button"
            >
              Pay now!
            </button>
          </div>
          <div className="history text-center">
            <div className="d-flex cart-title align-items-center">
              <HistoryIcon />
              <p className="m-1">History</p>
            </div>
            <table>
              <thead className="categories align-items-center">
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Categories</th>
                  <th scope="col">Price</th>
                  <th scope="col">Provider ID</th>
                  <th scope="col">Rating</th>
                  <th scope="col">In Stock</th>
                  <th scope="col">In Cart</th>
                </tr>
              </thead>
              <tbody>
                {purchasedList?.map((item) => {
                  return (
                    <tr className="user-item-details">
                      <td data-label="Image">
                        <img
                          src={item.commodity.image}
                          className="mb-0"
                          alt="item"
                        />
                      </td>
                      <td data-label="Name">
                        <p className="mb-0">{item.commodity.name}</p>
                      </td>
                      <td data-label="Categories">
                        <p className="mb-0">
                          {item.commodity.categories.join(", ")}
                        </p>
                      </td>
                      <td data-label="Price">
                        <p className="mb-0">${item.commodity.price}</p>
                      </td>
                      <td data-label="Provider ID">
                        <p className="mb-0">{item.commodity.providerId}</p>
                      </td>
                      <td data-label="Rating">
                        <p className="mb-0 rating">{item.commodity.rating}</p>
                      </td>
                      <td data-label="In Stock">
                        <p className="mb-0 in-stock">
                          {item.commodity.inStock}
                        </p>
                      </td>
                      <td data-label="Quantities">
                        <p className="mb-0">{item.count}</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {addCreditModalState && (
        <AddCreditModal
          credit={creditInput}
          onPaymentSuccess={() => {
            setCreditSuccess(true);
          }}
          setClose={() => setAddCreditModalState(false)}
        />
      )}
    </>
  );
};

export default User;
