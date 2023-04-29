import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="main-title">
        <h1><Link to="/">Digikala</Link></h1>
      </div>
      <div className="navbar-attr">
        <input className="search-box" type="text" placeholder="جست و جو" />
        <button className="nav-button"><i className="fa fa-user"></i> پنل کاربری </button>
        <button className="nav-button"><i className="fa fa-shopping-cart"></i> سبد خرید </button>
      </div>
    </nav>
  );
}
 
export default Navbar;