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
import SavedProperties from "./SavedProperties";

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
          <Route path="/" element={<Properties userID={userID} />} />
          <Route path="/add-property" element={<AddProperty />} />
          <Route
            path="/saved-properties"
            element={<SavedProperties userID={userID} />}
          />
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
