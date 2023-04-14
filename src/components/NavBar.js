import React from "react";
import "../styles/navbar.css";
import OtherLogo from "../images/OtherLogo.png";
import MClogo from "../images/MClogo.png";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <ul className="navbar-links">
        <img className="nav-logo" src={MClogo} alt="website-logo" />
        <li className="navbar-links-item">View Properties</li>
        <li className="navbar-links-item">Add Property</li>
      </ul>
    </div>
  );
};

export default NavBar;
