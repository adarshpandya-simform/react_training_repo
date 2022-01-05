import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../components/Counter";

test("renders counter with buttons", () => {
  render(<Counter />);
  const increaseButton = screen.getByRole("button", { name: "+" });
  const decreaseButton = screen.getByRole("button", { name: "-" });
  const counterSpan = screen.getByText("0");
  expect(increaseButton.textContent).toBe("+");
  expect(decreaseButton.textContent).toBe("-");
  expect(counterSpan.textContent).toBe("0");
});

test("should increase the count when + clicked", () => {
  render(<Counter />);
  const increaseButton = screen.getByRole("button", { name: "+" });
  const counterSpan = screen.getByText("0");
  fireEvent.click(increaseButton);
  expect(counterSpan.textContent).toBe("1");
});

test("should decrease the count when - clicked", () => {
  render(<Counter />);
  const decreaseButton = screen.getByRole("button", { name: "-" });
  const counterSpan = screen.getByText("0");
  fireEvent.click(decreaseButton);
  //   can't decrease less than zero
  expect(counterSpan.textContent).toBe("0");
  const increaseButton = screen.getByRole("button", { name: "+" });
  fireEvent.click(increaseButton);
  fireEvent.click(increaseButton);
  expect(counterSpan.textContent).toBe("2");
  fireEvent.click(decreaseButton);
  expect(counterSpan.textContent).toBe("1");
});
