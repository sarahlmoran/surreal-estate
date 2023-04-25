import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/sidebar.css";
import qs from "qs";

const SideBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    navigate(newQueryString);
  };

  return (
    <div className="side-bar">
      <ul className="sidebar-links">
        <Link
          className="sidebar-item"
          to={buildQueryString("query", { city: "Manchester" })}
        >
          Manchester
        </Link>

        <Link
          className="sidebar-item"
          to={buildQueryString("query", { city: "Leeds" })}
        >
          Leeds
        </Link>

        <Link
          className="sidebar-item"
          to={buildQueryString("query", { city: "Liverpool" })}
        >
          Liverpool
        </Link>

        <Link
          className="sidebar-item"
          to={buildQueryString("query", { city: "Sheffield" })}
        >
          Sheffield
        </Link>

        <Link
          className="sidebar-item"
          to={buildQueryString("sort", { price: 1 })}
        >
          Price Ascending
        </Link>

        <Link
          className="sidebar-item"
          to={buildQueryString("sort", { price: -1 })}
        >
          Price Descending
        </Link>
      </ul>
      <div className="search">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            className="search-input"
            type="text"
            placeholder="Enter Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-button" type="submit">
            <FontAwesomeIcon icon="magnifying-glass" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SideBar;
