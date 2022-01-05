import { fireEvent, render, screen } from "@testing-library/react";
import ButtonWithCheckbox from "../components/ButtonWithCheckbox";

test("renders button with checkbox", () => {
  render(<ButtonWithCheckbox />);
  const colorButton = screen.getByRole("button", { name: "change to red" });
  const checkbox = screen.getByRole("checkbox");
  expect(colorButton).toHaveStyle({ background: "blue" });
  expect(colorButton).toBeEnabled();
  expect(checkbox).not.toBeChecked();
});

test("should toggle the button state enable/disabled when clicking on checkbox", () => {
  render(<ButtonWithCheckbox />);
  const colorButton = screen.getByRole("button", { name: "change to red" });
  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);
  expect(colorButton).not.toBeEnabled();
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
