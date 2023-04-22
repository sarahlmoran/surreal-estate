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
      <ul className="sidebar-links">
        <li>
          <Link
            className="sidebar-link-items"
            to={buildQueryString("query", { city: "Manchester" })}
          >
            Manchester
          </Link>
        </li>
        <li>
          <Link
            className="sidebar-link-items"
            to={buildQueryString("query", { city: "Leeds" })}
          >
            Leeds
          </Link>
        </li>
        <li>
          <Link
            className="sidebar-link-items"
            to={buildQueryString("query", { city: "Liverpool" })}
          >
            Liverpool
          </Link>
        </li>
        <li>
          <Link
            className="sidebar-link-items"
            to={buildQueryString("query", { city: "Sheffield" })}
          >
            Sheffield
          </Link>
        </li>
        <li>
          <Link
            className="sidebar-link-items"
            to={buildQueryString("sort", { price: 1 })}
          >
            Price Ascending
          </Link>
        </li>
        <li>
          <Link
            className="sidebar-link-items"
            to={buildQueryString("sort", { price: -1 })}
          >
            Price Descending
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
