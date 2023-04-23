import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/saved-properties.css";
import Alert from "./Alert";
import SavedPropertyCard from "./SavedPropertyCard";

const SavedProperties = ({ _id }) => {
  const [savedProperties, setSavedProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/Favourite?populate=propertyListing")
      .then(({ data }) => setSavedProperties(data))
      .catch(() =>
        setAlert({ message: "Server error. Please try again later" })
      );
  }, []);

  return (
    <div className="saved-properties">
      <Alert message={alert.message} />
      Saved Properties
      {savedProperties.map((response) => (
        <div key={response._id} className="saved-item">
          <SavedPropertyCard {...response} />
          <div>{_id}</div>
        </div>
      ))}
    </div>
  );
};

export default SavedProperties;
