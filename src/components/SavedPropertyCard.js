import React from "react";
import "../styles/saved-property-card.css";

const SavedPropertyCard = ({ propertyListing, _id, onDelete }) => {
  return (
    <div className="saved-property-card">
      <div className="saved-property-card__title">{propertyListing.title}</div>
      <div className="saved-property-card__city">{propertyListing.city}</div>
      <div className="saved-property-card__price">{propertyListing.price}</div>
      <button type="submit" id="remove-button" onClick={() => onDelete(_id)}>
        Remove
      </button>
    </div>
  );
};

export default SavedPropertyCard;
