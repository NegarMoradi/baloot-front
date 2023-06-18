import React from "react";
import "./styles.css";
import baloot from "../../assets/png/Baloot.png";
import HeaderCart from "../headerCart";
import { useSelector } from "react-redux";
import { userSelectors } from "../../store/user/selector";

const Header = ({ username, cart }) => {
  const pathname = window.location.pathname;
  const user = useSelector(userSelectors.user);
  return pathname === "/" ? null : pathname === "/login" ? (
    <header className="logo">
      <a href="./">
        <img src={baloot} alt="Baloot logo" />
      </a>
    </header>
  ) : (
    <header className="d-xxl-flex">
      <div>{user.username && <HeaderCart />}</div>
      <a href="./" className="logo">
        <img src={baloot} alt="Baloot logo" />
      </a>
    </header>
  );
};

export default Header;
