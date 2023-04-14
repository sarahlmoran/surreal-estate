import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/app.css";
import NavBar from "./NavBar";
import AddProperty from "./AddProperty";
import Properties from "./Properties";

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Properties />} />
          <Route path="/add-property" element={<AddProperty />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
