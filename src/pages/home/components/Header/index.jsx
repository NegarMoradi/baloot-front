import './header.css';
import logo from '../../../../assets/png/Baloot.png';
import search from '../../../../assets/icons/searchIcon.svg';

const HomeHeader = () => {
    return(
        <header class="d-xxl-flex">
            <div class="header-button">
                <a href="./signInSigUp.html" class="btn">Login</a>
                <a href="./signInSigUp.html" class="btn">Register</a>
            </div>
            <div class="search m-auto">
                <img src={search} alt="search icon"/>
                <input class="border-0" type="text" placeholder="search your product ..."/>
                <select class="border-0" name="search" id="search">
                    <option value="name">name</option>
                    <option value="category">price</option>
                </select>
            </div>
            <a href="./home.html" class="logo">
                <img src={logo} alt="Baloot logo"/>
            </a>
        </header>
    )
}

export default HomeHeader;