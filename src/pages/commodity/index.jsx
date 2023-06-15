import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { userSelectors } from '../../store/user/selector';
import UseApi from '../../hooks/api';
import './commodity.css';
import CommodityDetail from "./components/commodityDetail";
import Comment from "./components/comment";
import SuggestedCommodity from "./components/suggestedCommodity";
const Commodity = () => {
    const { id } = useParams();
    const user = useSelector(userSelectors.user)
    const [commodity, setCommodity] = useState([]);
    const [suggestedCommodities, setSuggestedCommodities] = useState([]);
    const { apiCall } = UseApi();
    const onSuccessCommodities = (res) => {
        setCommodity(res.data.data);
    }

    const onSuccessSuggestedCommodities = (res) => {
        setSuggestedCommodities(res.data.data);
    }

    const getCommodityApiCall = () => {
        const query = {
            "username": user.username,
            "password": user.password
        }

        apiCall({ url: `http://localhost:5432/api/commodities/${id}`, query, method: 'get', sucessCallback: onSuccessCommodities })
    }

    const getSuggestedCommoditiesApiCall = () => {
        const query = {
            "username": user.username,
            "password": user.password
        }

        apiCall({ url: `http://localhost:5432/api/commodities/suggestedCommodities/${id}`, query, method: 'get', sucessCallback: onSuccessSuggestedCommodities })
    }

    useEffect(() => {
        getCommodityApiCall();
        getSuggestedCommoditiesApiCall();
      }, [id])
    
    return (
    <div className="commodity">

    <div className="pt-5 main">
        <CommodityDetail commodity={commodity}/>
        <div className="comments ml-5">
            { commodity?.comments && Object.values(commodity?.comments)[0] && (Object.values(commodity?.comments)[0]).map((comment, index) => {
                return (
                    <>
                        {index === 0 && <p className="comment-title m-0">Comments <span className="comment-counts">({Object.values(commodity?.comments)[0].length})</span></p>}
                        <Comment comment={comment} key={index}/>
                    </>
                )
            })}
            <div className="row comment-row">
                <div className="d-xxl-flex pt-4 align-items-end">
                    <div className="opinion w-100">
                        <p>Submit your opinion</p>
                        <input className="w-100 border-0" type="text"/>
                    </div>
                    <button className="submit-button py-3 px-4 border-0 ">Post</button>
                </div>
            </div>
       </div>
       <div className="more-items mx-5 mt-3 mb-5">
        {suggestedCommodities && 
            <>
                <p className="py-5">You also might like...</p>
                <div className="row g-5 more-item">
                    {suggestedCommodities.map((suggestedCommodity, index) => {
                        return(
                            <SuggestedCommodity key={index} suggestedCommodity={suggestedCommodity}/>
                        )
                    })}
                </div>
            </>
        }   
       </div>
    </div>

</div>
    )
}

export default Commodity;