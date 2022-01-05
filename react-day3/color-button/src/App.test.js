import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "change to red" });
  expect(buttonElement).toHaveStyle({ background: "blue" });
});

test("on click color change", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "change to red" });
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle({ background: "red" });
});

test("should change color on click", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "change to red" });
  fireEvent.click(buttonElement);
  expect(buttonElement.textContent).toBe("change to blue");
});
