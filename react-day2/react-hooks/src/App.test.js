import { fireEvent, render, screen } from "@testing-library/react";
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

test("should be clicked", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "click for dark" });
  expect(buttonElement).toHaveClass("light-btn");

  fireEvent.click(buttonElement);
  console.log(buttonElement.style);
  console.log(buttonElement.textContent);
});
