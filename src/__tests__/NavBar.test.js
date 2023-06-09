import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  xit("renders correctly", () => {
    const { asFragment } = render(<NavBar />);

    expect(asFragment()).toMatchSnapshot;
  });

  xit("renders the logo", () => {
    render(<NavBar />);

    const logo = screen.getByAltText(/website-logo/i);

    expect(logo).toBeInTheDocument();
  });
});
