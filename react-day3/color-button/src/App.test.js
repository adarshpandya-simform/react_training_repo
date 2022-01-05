import { fireEvent, render, screen } from "@testing-library/react";
import App, { removeCamelCase } from "./App";

test("should render button with style", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "change to red" });
  expect(buttonElement).toHaveStyle({ background: "blue" });
});

test("should change color on click", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "change to red" });
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle({ background: "red" });
});

test("should change text on click", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "change to red" });
  fireEvent.click(buttonElement);
  expect(buttonElement.textContent).toBe("change to blue");
});

describe("spaces before camelcase letters", () => {
  test("should work for no inner capital letter", () => {
    expect(removeCamelCase("Red")).toBe("Red");
  });

  test("should work for one inner capital letter", () => {
    expect(removeCamelCase("MidnightBlue")).toBe("Midnight Blue");
  });

  test("should work for multiple inner capital letters", () => {
    expect(removeCamelCase("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
