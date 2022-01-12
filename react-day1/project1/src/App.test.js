import { render, screen } from "@testing-library/react";
import App from "./App";

// test for link rendering Hello World
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
