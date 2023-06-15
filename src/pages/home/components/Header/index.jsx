import './header.css';
import logo from '../../../../assets/png/Baloot.png';
import search from '../../../../assets/icons/searchIcon.svg';
import { useState } from 'react';
import UseApi from '../../../../hooks/api';

const HomeHeader = ({onSearch}) => {

    const [inputState, setInputState] = useState("");
    const [selectState, setSelectState] = useState("search_by_name");
    const { apiCall } = UseApi();

    const onSuccess = (res) => {
        onSearch(res.data.data);
    }

    const getCommoditiesApiCall = (query) => {

        apiCall({ url: "http://localhost:5432/api/commodities", query, method: 'get', sucessCallback: onSuccess })
    }
    const onSubmit = (e) => {
        if(e.code === "Enter")  {
            const query = {
                action: selectState,
                query: inputState
            };
            getCommoditiesApiCall(query)
        }
    }
    return(
        <header className="d-xxl-flex">
            <div className="header-button-home">
                <a href="./login" className="btn">Register</a>
                <a href="./login" className="btn">Login</a>
            </div>
            <div className="search m-auto">
                <img src={search} alt="search icon"/>
                <input 
                    className="border-0" 
                    type="text" 
                    placeholder="search your product ..." 
                    value={inputState} 
                    onChange={(e) => {setInputState(e.target.value)}}
                    onKeyUp={onSubmit}
                />
                <select className="border-0" name="search" id="search" value={selectState} onChange={(e) => {setSelectState(e.target.value)}}>
                    <option value="search_by_name" selected>name</option>
                    <option value="search_by_category">category</option>
                </select>
            </div>
            <a href="./" className="logo">
                <img src={logo} alt="Baloot logo"/>
            </a>
        </header>
    )
}

export default HomeHeader;