import { screen, render } from "@testing-library/react";
import SummaryForm from "../components/SummaryForm";
import userEvent from "@testing-library/user-event";

test("should render button and checkbox on screen", () => {
  render(<SummaryForm />);
  const buttonElem = screen.getByRole("button", { name: "Confirm order" });
  const checkboxElem = screen.getByRole("checkbox");

  expect(buttonElem).toBeInTheDocument();
  expect(checkboxElem).toBeInTheDocument();
});

test("should render enabled button and unchecked checkbox", () => {
  render(<SummaryForm />);
  const buttonElem = screen.getByRole("button", { name: "Confirm order" });
  const checkboxElem = screen.getByRole("checkbox");
  expect(buttonElem).toBeDisabled();
  expect(checkboxElem).not.toBeChecked();
});

test("should enable button when checking checkbox", () => {
  render(<SummaryForm />);
  const buttonElem = screen.getByRole("button", { name: "Confirm order" });
  const checkboxElem = screen.getByRole("checkbox");
  expect(buttonElem).toBeDisabled();
  expect(checkboxElem).not.toBeChecked();

  // first click
  userEvent.click(checkboxElem);
  expect(buttonElem).toBeEnabled();
  expect(checkboxElem).toBeChecked();

  // second click
  userEvent.click(checkboxElem);
  expect(buttonElem).toBeDisabled();
  expect(checkboxElem).not.toBeChecked();
});
