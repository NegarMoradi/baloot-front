
import availableCommodities from '../../../../assets/png/AvailableCommodities.png';
import './setting.css';

const HomeSetting = () => {
    return (
        <div class="setting d-flex flex-row-reverse justify-content-between">
            <div class="sort d-flex align-items-center">
                <p class="mb-0">sort by:</p>
                <button class="name-button">name</button>
                <button class="price-button">price</button>
            </div>
            <div class="availableCommodities d-flex align-items-center">
                <p class="mb-0">Available commodities</p>
                <img src={availableCommodities} alt="Available commodities"/>
            </div>
        </div>
    )
}

export default HomeSetting;