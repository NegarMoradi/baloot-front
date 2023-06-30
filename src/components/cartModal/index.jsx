import React, { useEffect, useState } from "react";
import { hideCartModal } from "../../store/cartModal";
import { useDispatch, useSelector } from "react-redux";
import "./cartModal.css";
import UseApi from "../../hooks/api";
import { userSelectors } from "../../store/user/selector";
import { clear } from "../../store/cart";

const CartModal = () => {
  const dispatch = useDispatch();
  const [buyList, setBuyList] = useState([]);
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const { apiCall } = UseApi();
  const [totalPrice, setTotalPrice] = useState(0);
  const user = useSelector(userSelectors.user);

  const closeModal = () => {
    dispatch(hideCartModal());
  };
  const calculateTotalPrice = () => {
    let total = 0;
    buyList.forEach((item) => {
      total += item.commodity.price;
    });
    setTotalPrice(total);
  };
  const onSuccessBuyList = (res) => {
    setBuyList(res.data.data);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [buyList]);

  const onSuccessPayment = () => {
    dispatch(clear());
    closeModal();
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

  const paymentApiCall = () => {
    const query = {};

    apiCall({
      url: "http://localhost:5432/api/users/payment",
      query,
      method: "post",
      sucessCallback: onSuccessPayment,
    });
  };

  useEffect(() => {
    getBuyListApiCall();
  }, [user]);

  const onDiscountClick = () => {
    apiCall({
      url: "http://localhost:5432/api/users/discount",
      query: { code: code },
      method: "post",
      sucessCallback: () => {
        setDiscount(5000);
      },
    });
  };
  return (
    <div
      className="modal d-block"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content modal-setting p-1">
          <div className="modal-header border-0">
            <h5 className="modal-title p-1">Your cart</h5>
          </div>
          <div className="modal-body">
            <div className="mb-4">
              {buyList?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="d-flex justify-content-between modal-buy-list p-2 align-items-center"
                  >
                    <p className="modal-buy-list-title m-2 align-items-center">
                      . {item.commodity.name} x{item.count}
                    </p>
                    <p className="modal-buy-list-value m-2">
                      {item.commodity.price}$
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="d-flex discount justify-content-between p-2">
              <input
                type="text"
                placeholder="Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                disabled={!!discount}
              />{" "}
              <button onClick={onDiscountClick}>Submit</button>
            </div>
            <div className="total-payment d-flex justify-content-between p-2 mt-4">
              <p>total</p>
              <p className={`payment-value ${!!discount && "discount-price"}`}>
                {totalPrice}$
              </p>
            </div>
            {!!discount && (
              <div className="total-payment d-flex justify-content-between p-2 mt-4">
                <p>with discount</p>
                <p className="payment-value">{totalPrice - discount}$</p>
              </div>
            )}
          </div>
          <div className="modal-footer border-0">
            <button
              type="button"
              className="close-modal-button mx-3"
              data-dismiss="modal"
              onClick={closeModal}
            >
              Close
            </button>
            <button
              type="button"
              className="modal-button"
              onClick={paymentApiCall}
            >
              Buy!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
