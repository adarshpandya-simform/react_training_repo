import { render, screen } from "@testing-library/react";
import App from "./App";

test("should have correct color", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "click for dark" });
  expect(buttonElement).toHaveClass("light-btn");
});

test("should have correct initial text", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "click for dark" });
  expect(buttonElement).toHaveTextContent("click for dark");
});

// test("should turn dark when clicked", () => {});

// test("should change text when clicked", () => {});
