import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Submit button", () => {
  render(<App />);
  const linkElement = screen.getByText(/Submit/i);
  expect(linkElement).toBeInTheDocument();
});
