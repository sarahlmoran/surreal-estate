import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/sidebar.css";
import qs from "qs";

const SideBar = () => {
  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <div className="side-bar">
      sidebar
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
          <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
        </li>
        <li>
          <Link to={buildQueryString("query", { city: "Liverpool" })}>
            Liverpool
          </Link>
        </li>
        <li>
          <Link to={buildQueryString("query", { city: "Sheffield" })}>
            Sheffield
          </Link>
        </li>
        <li>
          <Link to={buildQueryString("sort", { price: 1 })}>
            Price Ascending
          </Link>
        </li>
        <li>
          <Link to={buildQueryString("sort", { price: -1 })}>
            Price Descending
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
