import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { userSelectors } from '../../store/user/selector';
import UseApi from '../../hooks/api';
import './commodity.css';
import commafy from "../../components/commafy";
import CommodityDetail from "./components/commodityDetail";
import Comment from "./components/comment";
const Commodity = () => {
    const { id } = useParams();
    const user = useSelector(userSelectors.user)
    const token = useSelector(userSelectors.token)
    const [commodity, setCommodity] = useState([]);
    const { loading,  apiCall } = UseApi();
    const onSuccess = (res) => {
        setCommodity(res.data.data);
        console.log(res.data.data)
    }

    const getCommodityApiCall = () => {
        const query = {
            "username": user.username,
            "password": user.password
        }

        apiCall({ url: `http://localhost:5432/api/commodities/${id}`, query, method: 'get', sucessCallback: onSuccess })
    }

    useEffect(() => {
        getCommodityApiCall();
      }, [id])
    
    return (
    <div className="commodity">

    <div className="pt-5 main">
        <CommodityDetail commodity={commodity}/>
       <div className="comments ml-5">
        {/* {commodity?.comments[Object.keys(commodity.comments)[0]].map((comment, index)=> {
            {index === 0 && <p>Comments <span className="comment-counts">({commodity?.comments.amir.length})</span></p>}
            <Comment comment={comment} key={index}/>
        })} */}
        
            {/* {console.log(Object.keys(commodity.comments))} */}
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
            <p className="py-5">You also might like...</p>
            <div className="row g-5">
                <div className="col-xxl-3 col-xl-6 col-lg-6">
                    <div className="item pt-3">
                        <p className="item-title">Huawei nova 9</p>
                        <p className="item-count">1 left in stock</p>
                        <img className="w-100" src="/ballot-front/assets/png/mobile.png" alt="item image"/>
                        <div className="item-details d-flex justify-content-between align-items-center m-2">
                            <p className="m-0">300$</p>
                            <button>add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-6 col-lg-6">
                    <div className="item pt-3">
                        <p className="item-title">Huawei nova 9</p>
                        <p className="item-count">1 left in stock</p>
                        <img className="w-100" src="/ballot-front/assets/png/mobile.png" alt="item image"/>
                        <div className="item-details d-flex justify-content-between align-items-center m-2">
                            <p className="m-0">300$</p>
                            <button>add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-6 col-lg-6">
                    <div className="item pt-3">
                        <p className="item-title">Huawei nova 9</p>
                        <p className="item-count">1 left in stock</p>
                        <img className="w-100" src="/ballot-front/assets/png/mobile.png" alt="item image"/>
                        <div className="item-details d-flex justify-content-between align-items-center m-2">
                            <p className="m-0">300$</p>
                            <button>add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-6 col-lg-6">
                    <div className="item pt-3">
                        <p className="item-title">Huawei nova 9</p>
                        <p className="item-count">1 left in stock</p>
                        <img className="w-100" src="/ballot-front/assets/png/mobile.png" alt="item image"/>
                        <div className="item-details d-flex justify-content-between align-items-center m-2">
                            <p className="m-0">300$</p>
                            <button>add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>

</div>
    )
}

export default Commodity;