import React, { useState } from "react";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
            placeholder="4 bedroom townhouse"
          />
        </label>
        <label htmlFor="city">
          City
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Liverpool">Liverpool</option>
            <option value="Sheffield">Sheffield</option>
          </select>
        </label>
        <label htmlFor="type">
          Type
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          Bedrooms
          <input
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
            placeholder="3"
            type="number"
          />
        </label>
        <label htmlFor="bathrooms">
          Bathrooms
          <input
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
            placeholder="2"
            type="number"
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
            placeholder="200,000"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
            placeholder="jane.doe@gmail.com"
          />
        </label>

        <button type="submit" id="add-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
