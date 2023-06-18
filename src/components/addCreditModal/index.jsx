const AddCreditModal = ({ credit, setClose }) => {
  return (
    <div
      className="modal d-block"
      id="addCreditModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content p-2">
          <div className="modal-header border-0">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Add Credit
            </h5>
          </div>
          <div className="modal-body modal-desc text-align-start">
            <p>Are you sure you want to add {credit}$ to your account</p>
          </div>
          <div className="modal-footer border-0">
            <button
              type="button"
              className="close-modal-button mx-3"
              data-dismiss="modal"
              onClick={() => setClose()}
            >
              Close
            </button>
            <button type="button" className="modal-button">
              Confirm!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCreditModal;
