import React, { useEffect, useState } from "react";
import { hideCartModal } from "../../store/cartModal";
import { useDispatch, useSelector } from "react-redux";
import "./cartModal.css";
import UseApi from "../../hooks/api";
import { userSelectors } from "../../store/user/selector";

const CartModal = () => {
  const dispatch = useDispatch();
  const [buyList, setBuyList] = useState([]);
  const { apiCall } = UseApi();
  const [totalPrice, setTotalPrice] = useState(0);
  const user = useSelector(userSelectors.user);

  const closeModal = () => {
    dispatch(hideCartModal());
  };
  const calculateTotalPrice = () => {
   let total = 0;
    buyList.forEach(item => {
      total += item.commodity.price;
    })
    setTotalPrice(total);
  }
  const onSuccessBuyList = (res) => {
    setBuyList(res.data.data);
  };

  useEffect(() => {
    calculateTotalPrice()
  }, [buyList])

  const onSuccessPurchase = () => {
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

  const purchaseApiCall = () => {
    const query = {};

    apiCall({
      url: "http://localhost:5432/api/users/payment",
      query,
      method: "post",
      sucessCallback: onSuccessPurchase,
    });
  };

  useEffect(() => {
    getBuyListApiCall();
  }, [user]);

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
              {buyList?.map((item) => {
                return (
                  <div className="d-flex justify-content-between modal-buy-list p-2 align-items-center">
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
              <input type="text" placeholder="Code" /> <button>Submit</button>
            </div>
            <div className="total-payment d-flex justify-content-between p-2 mt-4">
              <p>total</p>
              <p className="payment-value">{totalPrice}$</p>
            </div>
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
              onClick={() => purchaseApiCall}
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
