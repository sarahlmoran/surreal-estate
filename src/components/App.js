import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBath,
  faBed,
  faSterlingSign,
  faHouse,
  faEnvelope,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/app.css";
import NavBar from "./NavBar";
import AddProperty from "./AddProperty";
import Properties from "./Properties";

const App = () => {
  const [userID, setUserID] = useState("");
  const handleLogin = (response) => {
    setUserID(response.userID);
  };

  const handleLogout = () => {
    window.FB.logout(setUserID(""));
  };

  return (
    <Router>
      <div className="app">
        <NavBar userID={userID} onLogin={handleLogin} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Properties />} />
          <Route path="/add-property" element={<AddProperty />} />
        </Routes>
      </div>
    </Router>
  );
};

library.add(
  faBath,
  faBed,
  faSterlingSign,
  faHouse,
  faEnvelope,
  faMagnifyingGlass
);
export default App;
