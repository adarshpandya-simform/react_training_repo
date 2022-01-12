import { render, screen } from "../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("should render happy path", async () => {
  // render app
  render(<App />);
  // add ice cream scoop and toppings
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1");

  const chocolateInput = screen.getByRole("spinbutton", {
    name: "Chocolate",
  });
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, "2");

  const cherriesCheckbox = await screen.findByRole("checkbox", {
    name: "Cherries",
  });
  userEvent.click(cherriesCheckbox);
  // check summary
  const orderSumamryButton = screen.getByRole("button", {
    name: /order sundae/i,
  });
  userEvent.click(orderSumamryButton);

  const summaryHeading = screen.getByRole("heading", { name: "Order Summary" });
  expect(summaryHeading).toBeInTheDocument();

  const scoopHeading = screen.getByRole("heading", { name: "Scoops: $6.00" });
  expect(scoopHeading).toBeInTheDocument();

  const toppingHeading = screen.getByRole("heading", {
    name: "Toppings: $1.50",
  });
  expect(toppingHeading).toBeInTheDocument();

  expect(screen.getByText("1 Vanilla")).toBeInTheDocument();
  expect(screen.getByText("2 Chocolate")).toBeInTheDocument();
  expect(screen.getByText("Cherries")).toBeInTheDocument();

  // terms and condition
  const tAndC = screen.getByRole("checkbox", { name: /terms and conditions/i });
  userEvent.click(tAndC);

  const confirmOrderButton = screen.getByRole("button", {
    name: /confirm order/i,
  });
  userEvent.click(confirmOrderButton);

  const thankYouHeader = await screen.findByRole("heading", {
    name: /thank you/i,
  });
  expect(thankYouHeader).toBeInTheDocument();

  const orderNumber = await screen.findByText(/order number/i);
  expect(orderNumber).toBeInTheDocument();

  const newOrderButton = screen.getByRole("button", { name: /new order/i });
  userEvent.click(newOrderButton);

  const scoopsTotal = screen.getByText("Scoops total: $0.00", { exact: false });
  const toppingsTotal = screen.getByText("Toppings total: $0.00", {
    exact: false,
  });

  expect(scoopsTotal).toBeInTheDocument();
  expect(toppingsTotal).toBeInTheDocument();

  await screen.findByRole("spinbutton", { name: "Vanilla" });
  await screen.findByRole("checkbox", { name: "Cherries" });
});
