import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/properties.css";
import Alert from "./Alert";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then((response) => {
        setProperties(response.data);
      })
      .catch(() =>
        setAlert({ message: "Server error. Please try again later." })
      );
  });

  return (
    <div className="properties">
      <Alert message={alert.message} />
      {properties.map((response) => (
        <div key={response._id} className="item">
          <PropertyCard {...response} />
        </div>
      ))}
    </div>
  );
};

export default Properties;
