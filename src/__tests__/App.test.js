import { render } from "@testing-library/react";
import App from "../components/App";

it("renders correctly", () => {
  const { asFragment } = render(<App />);

  expect(asFragment).toMatchSnapshot();
});
