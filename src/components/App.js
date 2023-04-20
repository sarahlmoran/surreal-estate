import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBath,
  faBed,
  faSterlingSign,
  faHouse,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/app.css";
import NavBar from "./NavBar";
import AddProperty from "./AddProperty";
import Properties from "./Properties";
import PropertyCard from "./PropertyCard";

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Properties />
                <PropertyCard
                  title="3 bedroom bungalow"
                  city="Manchester"
                  type="bungalow"
                  bedrooms="3"
                  bathrooms="1"
                  price="300,000"
                  email="seller@gmail.com"
                />
              </>
            }
          />
          <Route path="/add-property" element={<AddProperty />} />
        </Routes>
      </div>
    </Router>
  );
};

library.add(faBath, faBed, faSterlingSign, faHouse, faEnvelope);
export default App;
