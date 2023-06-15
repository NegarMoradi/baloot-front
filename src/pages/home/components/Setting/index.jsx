
import availableCommodities from '../../../../assets/png/AvailableCommodities.png';
import './setting.css';
import UseApi from '../../../../hooks/api';

const HomeSetting = ({onSort}) => {

    const { apiCall } = UseApi();

    const onSuccess = (res) => {
        onSort(res.data.data);
    }

    const getCommoditiesApiCall = (query) => {
        apiCall({ url: "http://localhost:5432/api/commodities", query, method: 'get', sucessCallback: onSuccess })
    }

    const onSelectSort = (type) => {
        const query = {};
        if(type === "price") {
            query.action= 'sort_by_price'

        }
        getCommoditiesApiCall(query);
    }


    return (
        <div className="setting d-flex flex-row-reverse justify-content-between">
            <div className="sort d-flex align-items-center">
                <p className="mb-0">sort by:</p>
                <button className="name-button" onClick={() => {onSelectSort('name')}}>name</button>
                <button className="price-button" onClick={() => {onSelectSort('price')}}>price</button>
            </div>
            <div className="availableCommodities d-flex align-items-center">
                <p className="mb-0">Available commodities</p>
                <img src={availableCommodities} alt="Available commodities"/>
            </div>
        </div>
    )
}

export default HomeSetting;