import React, { useEffect, useState } from "react";
import "./user.css"
import NameIcon from "../../assets/icons/name";
import EmailIcon from "../../assets/icons/email";
import BirthDateIcon from "../../assets/icons/birthDate";
import AddressIcon from "../../assets/icons/address";
import DollarSignIcon from "../../assets/icons/dollarSign";
import BasketIcon from "../../assets/icons/basket";
import HistoryIcon from "../../assets/icons/history";
import UseApi from "../../hooks/api";
const User = () => {

    const [userData, setUserData] = useState(null)

    const { apiCall } = UseApi();


    const onSuccess = (res) => {
        setUserData(res.data.data)
    }

    useEffect(() => {
        apiCall({ url: "http://localhost:5432/api/users/buyList", query: {}, method: 'post', sucessCallback: onSuccess })

    })
    return (
        <div className="mt-5 main">
            <div calssName="user d-xxl-flex justify-content-between">
                <div calssName="user-details">
                    <div calssName="d-flex align-items-center mb-3">
                        {/* <img src="../../assets/icons/name.svg" alt="user name"/> */}
                        <NameIcon />
                        <p calssName="mb-0 mx-4">Marshal</p>
                    </div>
                    <div calssName="d-flex align-items-center">
                        {/* <img src="/ballot-front/assets/icons/email.svg" alt="user email"/> */}
                        <EmailIcon />
                        <p calssName="mb-0 mx-4">Marshal.Mathers@gmail.com</p>
                    </div>
                    <div calssName="d-flex align-items-center my-3">
                        {/* <img src="/ballot-front/assets/icons/birthDate.svg" alt="user birthDate"/> */}
                        <BirthDateIcon />
                        <p calssName="mb-0 mx-4">1972/10/17</p>
                    </div>
                    <div calssName="user-address d-flex align-items-center">
                        {/* <img calssName="pl-1" src="/ballot-front/assets/icons/address.svg" alt="user address"/> */}
                        <AddressIcon />
                        <p calssName="mb-0 mx-4">20785 Schultes Avenue, Warren, MI 48091</p>
                    </div>
                </div>
                <div calssName="user-credit d-flex flex-column my-1 align-items-center">
                    <div calssName="d-flex">
                        {/* <img calssName="mx-2" src="/ballot-front/assets/icons/dollarSign.svg" alt="dollar sign"/> */}
                        <DollarSignIcon />
                        <p calssName="mb-0 mx-1">10000000</p>
                    </div>
                    <input calssName="my-3 px-4 w-100" type="text" placeholder="$Amount"/>
                    <button calssName="my-1 w-100">Add More Credit</button>
                </div>
            </div>
            <div calssName="cart text-center">
                <div calssName="d-flex cart-title">
                    {/* <img src="/ballot-front/assets/icons/basket.svg" alt="cart icon"/> */}
                    <BasketIcon />
                    <p calssName="m-1">Cart</p>
                </div>
                <table>
                    <thead calssName="categories align-items-center">
                    <tr>
                        <th scope="col" >Image</th>
                        <th scope="col" >Name</th>
                        <th scope="col" >Categories</th>
                        <th scope="col" >Price</th>
                        <th scope="col" >Provider ID</th>
                        <th scope="col" >Rating</th>
                        <th scope="col" >In Stock</th>
                        <th scope="col" >In Cart</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr calssName="item-details">
                        <td data-label="Image">
                            <img src="/ballot-front/assets/png/mobile.png" calssName="mb-0" alt="item photo"/>
                        </td>
                        <td data-label="Name"><p calssName="mb-0">Galaxy S21</p></td>
                        <td data-label="Categories"><p calssName="mb-0">Technology, Phone</p></td>
                        <td data-label="Price"><p calssName="mb-0">$21000000</p></td>
                        <td data-label="Provider ID"><p calssName="mb-0">1234</p></td>
                        <td data-label="Rating"><p calssName="mb-0 rating">8.3</p></td>
                        <td data-label="In Stock"><p calssName="mb-0 in-stock">17</p></td>
                        <td data-label="In Cart" calssName="in-cart-td">
                            <div calssName="in-cart"><span>-</span><p calssName="mb-0">1</p><span>+</span></div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <button calssName="py-3 w-50" >Pay now!</button>
            </div>
            <div calssName="history text-center">
                <div calssName="d-flex cart-title">
                    {/* <img src="/ballot-front/assets/icons/history.svg" alt="history icon"/> */}
                    <HistoryIcon />
                    <p calssName="m-1">History</p>
                </div>
                <table>
                    <thead calssName="categories align-items-center">
                    <tr>
                        <th scope="col" >Image</th>
                        <th scope="col" >Name</th>
                        <th scope="col" >Categories</th>
                        <th scope="col" >Price</th>
                        <th scope="col" >Provider ID</th>
                        <th scope="col" >Rating</th>
                        <th scope="col" >In Stock</th>
                        <th scope="col" >In Cart</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr calssName="item-details">
                        <td data-label="Image"><img src="/ballot-front/assets/png/spaghetti.png" calssName="mb-0" alt="item photo"/></td>
                        <td data-label="Name"><p calssName="mb-0">Mom’s Spaghetti</p></td>
                        <td data-label="Categories"><p calssName="mb-0">Food</p></td>
                        <td data-label="Price"><p calssName="mb-0">$60000</p></td>
                        <td data-label="Provider ID"><p calssName="mb-0">313</p></td>
                        <td data-label="Rating"><p calssName="mb-0 rating">10</p></td>
                        <td data-label="In Stock"><p calssName="mb-0 in-stock">0</p></td>
                        <td data-label="Quantities"><p calssName="mb-0">0</p></td>
                    </tr>
                    <tr calssName="item-details">
                        <td data-label="Image"><img src="/ballot-front/assets/png/microphone.png" calssName="mb-0" alt="item photo"/></td>
                        <td data-label="Name"><p calssName="mb-0">Dre’s Microphone</p></td>
                        <td data-label="Categories"><p calssName="mb-0">Technology</p></td>
                        <td data-label="Price"><p calssName="mb-0">$4200000</p></td>
                        <td data-label="Provider ID"><p calssName="mb-0">4321</p></td>
                        <td data-label="Rating"><p calssName="mb-0 rating">8.5</p></td>
                        <td data-label="In Stock"><p calssName="mb-0 in-stock">22</p></td>
                        <td data-label="Quantities"><p calssName="mb-0">1</p></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default User;