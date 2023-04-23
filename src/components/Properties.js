import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/properties.css";
import Alert from "./Alert";
import PropertyCard from "./PropertyCard";
import SideBar from "./SideBar";

const Properties = ({ userID }) => {
  const initialState = { alert: { message: "", isSuccess: false } };
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then((response) => {
        setProperties(response.data);
      })
      .catch(() =>
        setAlert({ message: "Server error. Please try again later." })
      );
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then((response) => setProperties(response.data))
      .catch(() =>
        setAlert({ message: "Server error. Please try again later." })
      );
  }, [search]);

  const handleSaveProperty = (propertyId) => {
    setAlert({ message: "", isSuccess: false });
    axios
      .post("http://localhost:4000/api/v1/Favourite", {
        propertyListing: propertyId,
        fbUserId: userID,
      })
      .then((response) => {
        setAlert({ message: "Property saved", isSuccess: true });
        console.log(response);
        console.log(response.data);
      })
      .catch(() =>
        setAlert({ message: "Server error. Please try again later." })
      );
  };

  return (
    <div className="properties">
      <Alert message={alert.message} />
      <SideBar />
      {properties.map((response) => (
        <div key={response._id} className="item">
          <PropertyCard
            userID={userID}
            {...response}
            onSaveProperty={handleSaveProperty}
          />
        </div>
      ))}
    </div>
  );
};

export default Properties;
