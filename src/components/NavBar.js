import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import OtherLogo from "../images/OtherLogo.png";
import MClogo from "../images/MClogo.png";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <ul className="navbar-links">
        <img className="nav-logo" src={MClogo} alt="website-logo" />
        <li className="navbar-links-item">
          <Link className="navbar-item" to="/">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-item" to="/add-property">
            Add Properties
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
