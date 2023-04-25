import React from "react";
import "../styles/saved-property-card.css";
import axios from "axios";

const SavedPropertyCard = ({ propertyListing }) => {
  return (
    <div className="saved-property-card">
      <div className="saved-property-card__title">{propertyListing.title}</div>
      <div className="saved-property-card__city">{propertyListing.city}</div>
      <div className="saved-property-card__price">{propertyListing.price}</div>
    </div>
  );
};

export default SavedPropertyCard;
