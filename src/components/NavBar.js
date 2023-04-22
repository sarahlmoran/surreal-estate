import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import "../styles/navbar.css";
import MClogo from "../images/MClogo.png";

const NavBar = ({ onLogin, onLogout, userID }) => {
  return (
    <div className="nav-bar">
      <img className="nav-logo" src={MClogo} alt="website-logo" />
      <ul className="navbar-links">
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
      <div className="facebook-login">
        {userID ? (
          <button type="submit" className="facebook-signout" onClick={onLogout}>
            Sign out
          </button>
        ) : (
          <FacebookLogin
            appId="756459945966530"
            callback={onLogin}
            fields="name,email,picture"
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
