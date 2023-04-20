import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/property-card.css";

const PropertyCard = (props) => {
  const { bathrooms, bedrooms, city, email, price, title, type } = props;
  return (
    <div className="add-property">
      <FontAwesomeIcon icon="house" />
      <div className="property-card__title">{title}</div>
      <div className="property-card__city">{city}</div>
      <div className="property-card__type">{type}</div>
      <div className="property-card__bedrooms">{bedrooms}</div>
      <FontAwesomeIcon icon="bed" />
      <div className="property-card__bathrooms">{bathrooms}</div>
      <FontAwesomeIcon icon="bath" />
      <FontAwesomeIcon icon="sterling-sign" />
      <div className="property-card__price">{price}</div>
      <div className="property-card__email">
        <a href={`mailto:${email}`}>Email</a>
      </div>
      <FontAwesomeIcon icon="envelope" />
    </div>
  );
};

export default PropertyCard;
