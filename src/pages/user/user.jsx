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
import { clear } from "../../store/user";
import AddCreditModal from "../../components/addCreditModal";
import { showCartModal } from "../../store/cartModal";

const User = () => {
  const user = useSelector(userSelectors.user);
  const dispatch = useDispatch();
  const { apiCall } = UseApi();
  const [buyList, setBuyList] = useState([]);
  const [addCreditModalState, setAddCreditModalState] = useState(false);
  const [creditInput, setCreditInput] = useState("");
  const [purchasedList, setPurchasedList] = useState([]);

  const onSuccessLogout = () => {
    dispatch(clear());
    window.location.replace("http://localhost:3000/");
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
              <button onClick={() => logoutApiCall()} className="logout">
                logout
              </button>
            </div>
            <div className="user-credit d-flex flex-column my-1 align-items-center">
              <div className="d-flex">
                <img className="mx-2" src={DollarSignIcon} alt="dollar sign" />
                <p className="mb-0 mx-1">{user.credit}</p>
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
                className="my-1 w-100"
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
                {buyList?.map(() => {
                  return (
                    <tr className="user-item-details">
                      <td data-label="Image">
                        <img
                          src="/ballot-front/assets/png/mobile.png"
                          className="mb-0"
                          alt="item"
                        />
                      </td>
                      <td data-label="Name">
                        <p className="mb-0">Galaxy S21</p>
                      </td>
                      <td data-label="Categories">
                        <p className="mb-0">Technology, Phone</p>
                      </td>
                      <td data-label="Price">
                        <p className="mb-0">$21000000</p>
                      </td>
                      <td data-label="Provider ID">
                        <p className="mb-0">1234</p>
                      </td>
                      <td data-label="Rating">
                        <p className="mb-0 rating">8.3</p>
                      </td>
                      <td data-label="In Stock">
                        <p className="mb-0 in-stock">17</p>
                      </td>
                      <td data-label="In Cart" className="in-cart-td">
                        <div className="in-cart">
                          <span>-</span>
                          <p className="mb-0">1</p>
                          <span>+</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button onClick={showCartDialog} className="py-3 w-50">
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
                <tr className="user-item-details">
                  <td data-label="Image">
                    <img
                      src="/ballot-front/assets/png/spaghetti.png"
                      className="mb-0"
                      alt="item"
                    />
                  </td>
                  <td data-label="Name">
                    <p className="mb-0">Mom’s Spaghetti</p>
                  </td>
                  <td data-label="Categories">
                    <p className="mb-0">Food</p>
                  </td>
                  <td data-label="Price">
                    <p className="mb-0">$60000</p>
                  </td>
                  <td data-label="Provider ID">
                    <p className="mb-0">313</p>
                  </td>
                  <td data-label="Rating">
                    <p className="mb-0 rating">10</p>
                  </td>
                  <td data-label="In Stock">
                    <p className="mb-0 in-stock">0</p>
                  </td>
                  <td data-label="Quantities">
                    <p className="mb-0">0</p>
                  </td>
                </tr>
                <tr className="user-item-details">
                  <td data-label="Image">
                    <img
                      src="/ballot-front/assets/png/microphone.png"
                      className="mb-0"
                      alt="item"
                    />
                  </td>
                  <td data-label="Name">
                    <p className="mb-0">Dre’s Microphone</p>
                  </td>
                  <td data-label="Categories">
                    <p className="mb-0">Technology</p>
                  </td>
                  <td data-label="Price">
                    <p className="mb-0">$4200000</p>
                  </td>
                  <td data-label="Provider ID">
                    <p className="mb-0">4321</p>
                  </td>
                  <td data-label="Rating">
                    <p className="mb-0 rating">8.5</p>
                  </td>
                  <td data-label="In Stock">
                    <p className="mb-0 in-stock">22</p>
                  </td>
                  <td data-label="Quantities">
                    <p className="mb-0">1</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {addCreditModalState && (
        <AddCreditModal
          credit={creditInput}
          setClose={() => setAddCreditModalState(false)}
        />
      )}
    </>
  );
};

export default User;
