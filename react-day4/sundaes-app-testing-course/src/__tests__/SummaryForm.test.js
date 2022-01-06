import {
  screen,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react";
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

test("popover should respond on hover", async () => {
  render(<SummaryForm />);
  // popover starts hidden
  const popover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(popover).not.toBeInTheDocument();
  // appears
  const tAndC = screen.getByText(/terms and conditions/i);
  userEvent.hover(tAndC);

  let popOver2 = screen.getByText("no ice cream will actually be delivered");
  expect(popOver2).toBeInTheDocument();
  // hidden when mouse out
  userEvent.unhover(tAndC);

  await waitForElementToBeRemoved(() =>
    screen.queryByText("no ice cream will actually be delivered")
  );
});
