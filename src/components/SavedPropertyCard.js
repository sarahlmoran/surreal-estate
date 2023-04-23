import React from "react";
import "../styles/saved-property-card.css";
import axios from "axios";

const SavedPropertyCard = ({ _id, propertyListing }) => {
  const handleRemoveProperty = () => {
    axios
      .delete(`http://localhost:4000/api/v1/Favourite/${_id}`)
      .then()
      .catch();
  };
  return (
    <div className="saved-property-card">
      <div className="saved-property-card__title">{propertyListing.title}</div>
      <div className="saved-property-card__city">{propertyListing.city}</div>
      <div className="saved-property-card__price">{propertyListing.price}</div>
      <button type="submit" id="remove-button" onClick={handleRemoveProperty}>
        Remove
      </button>
    </div>
  );
};

export default SavedPropertyCard;
