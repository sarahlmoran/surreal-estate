import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    bathrooms: 2,
    bedrooms: 4,
    city: "Stub City",
    email: "stub@email.com",
    price: "120,000",
    title: "Stub title",
    type: "flat",
  };

  it("renders", () => {
    const { asFragment } = render(
      <PropertyCard
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        city={validProps.city}
        email={validProps.email}
        price={validProps.price}
        title={validProps.title}
        type={validProps.type}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(
      <PropertyCard
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        city={validProps.city}
        email={validProps.email}
        price={validProps.price}
        title={validProps.title}
        type={validProps.type}
      />
    );
    expect(getByText("2")).toHaveClass("property-card__bathrooms");
    expect(getByText("4")).toHaveClass("property-card__bedrooms");
    expect(getByText("Stub City")).toHaveClass("property-card__city");
    expect(getByText("stub@email.com")).toHaveClass("property-card__email");
    expect(getByText("120,000")).toHaveClass("property-card__price");
    expect(getByText("Stub title")).toHaveClass("property-card__title");
    expect(getByText("flat")).toHaveClass("property-card__type");
  });
});
