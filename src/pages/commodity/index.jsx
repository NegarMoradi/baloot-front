import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseApi from "../../hooks/api";
import "./commodity.css";
import CommodityDetail from "./components/commodityDetail";
import Comment from "./components/comment";
import SuggestedCommodity from "./components/suggestedCommodity";
const Commodity = () => {
  const { id } = useParams();
  const [commodity, setCommodity] = useState(null);
  const [suggestedCommodities, setSuggestedCommodities] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [provider, setProvider] = useState([]);
  const { apiCall } = UseApi();
  const onSuccessCommodities = (res) => {
    setCommodity(res.data.data);
  };

  const onSuccessSuggestedCommodities = (res) => {
    setSuggestedCommodities(res.data.data);
  };

  const onSuccessProvider = (res) => {
    setProvider(res.data.data);
  };
  const getCommodityApiCall = () => {
    const query = {};

    apiCall({
      url: `http://localhost:5432/api/commodities/${id}`,
      query,
      method: "get",
      sucessCallback: onSuccessCommodities,
    });
  };

  const getSuggestedCommoditiesApiCall = () => {
    const query = {};

    apiCall({
      url: `http://localhost:5432/api/commodities/suggestedCommodities/${id}`,
      query,
      method: "get",
      sucessCallback: onSuccessSuggestedCommodities,
    });
  };

  const getProviderApiCall = () => {
    const query = {};
    apiCall({
      url: `http://localhost:5432/api/commodities/provider/${commodity?.providerId}`,
      query,
      method: "get",
      sucessCallback: onSuccessProvider,
    });
  };

  useEffect(() => {
    getCommodityApiCall();
    getSuggestedCommoditiesApiCall();
  }, [id]);

  useEffect(() => {
    if (commodity) {
      getProviderApiCall();
    }
  }, [commodity]);

  const onSaveCommentSuccessfully = (res) => {
    getCommodityApiCall();
  };

  const onSaveComment = () => {
    apiCall({
      url: `http://localhost:5432/api/commodities/comment/${commodity.id}`,
      query: { comment: commentInput },
      method: "post",
      sucessCallback: onSaveCommentSuccessfully,
    });
  };

  Array.prototype.getLength = function () {
    return this.reduce(
      (sum, elt) => sum + (elt.length ? elt.getLength() : 1),
      0
    );
  };

  return (
    <div className="commodity">
      <div className="pt-5 main">
        {commodity && (
          <>
            <CommodityDetail commodity={commodity} provider={provider} />
            <div className="comments ml-5">
              {commodity?.comments &&
                Object.values(commodity?.comments) &&
                Object.values(commodity?.comments).map((comment, index) => (
                  <>
                    {comment.map((item) => (
                      <>
                        {index === 0 && (
                          <p className="comment-title m-0">
                            Comments{" "}
                            <span className="comment-counts">
                              ({Object.values(commodity?.comments).getLength()})
                            </span>
                          </p>
                        )}
                        <Comment
                          comment={item}
                          key={index}
                          getCommentFn={getCommodityApiCall}
                        />
                      </>
                    ))}
                  </>
                ))}
              <div className="row comment-row">
                <div className="d-xxl-flex pt-4 align-items-end">
                  <div className="opinion w-100">
                    <p>Submit your opinion</p>
                    <input
                      className="w-100 border-0"
                      type="text"
                      value={commentInput}
                      onChange={(e) => {
                        setCommentInput(e.target.value);
                      }}
                    />
                  </div>
                  <button
                    className="submit-button py-3 px-4 border-0"
                    onClick={onSaveComment}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
            <div className="more-items mx-5 mt-3 mb-5">
              {suggestedCommodities && (
                <>
                  <p className="py-5">You also might like...</p>
                  <div className="row g-5 more-item">
                    {suggestedCommodities.map((suggestedCommodity, index) => {
                      return (
                        <SuggestedCommodity
                          key={index}
                          suggestedCommodity={suggestedCommodity}
                        />
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Commodity;
