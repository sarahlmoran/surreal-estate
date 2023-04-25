import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/saved-properties.css";
import Alert from "./Alert";
import SavedPropertyCard from "./SavedPropertyCard";

const SavedProperties = ({ userID }) => {
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

  const handleRemoveProperty = (_id) => {
    axios
      .delete(`http://localhost:4000/api/v1/Favourite/${_id}`)
      .then(() => {
        axios
          .get(
            "http://localhost:4000/api/v1/Favourite?populate=propertyListing"
          )
          .then(({ data }) => setSavedProperties(data));
      })
      .catch();
  };

  if (!userID) return <p>Please sign in to view saved properties</p>;

  return (
    <div className="saved-properties">
      <Alert message={alert.message} />
      Saved Properties
      {savedProperties.map((response) => (
        <div key={response._id} className="saved-item">
          <SavedPropertyCard {...response} onDelete={handleRemoveProperty} />
        </div>
      ))}
    </div>
  );
};

export default SavedProperties;
