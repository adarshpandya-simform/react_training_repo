import { render, screen } from "../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../components/Options";
import OrderEntry from "../components/OrderEntry";
// import { OrderDetailsProvider } from "../contexts/order.context";

test("should update scoop subtotal when scoops change", async () => {
  render(<Options optionType={"scoops"} />);

  // start total with 0
  const scoopTotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopTotal).toHaveTextContent("0.00");

  // update vanilla to 1
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1");
  expect(scoopTotal).toHaveTextContent("2.00");

  // update chocolate to 2
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });

  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, "2");
  expect(scoopTotal).toHaveTextContent("6.00");
});

test("should toppings subtotal when change", async () => {
  render(<Options optionType={"toppings"} />);
  const subTotal = screen.getByText("Toppings total: $", { exact: false });
  expect(subTotal).toHaveTextContent("0.00");

  const cherriesCheckbox = await screen.findByRole("checkbox", {
    name: "Cherries",
  });
  userEvent.click(cherriesCheckbox);
  expect(subTotal).toHaveTextContent("1.50");

  const hotfudgeCheckbox = await screen.findByRole("checkbox", {
    name: "Hot Fudge",
  });

  // add topping
  userEvent.click(hotfudgeCheckbox);
  expect(subTotal).toHaveTextContent("3.00");

  // remove topping
  userEvent.click(hotfudgeCheckbox);
  expect(subTotal).toHaveTextContent("1.50");
});

describe("grand total", () => {
  test("should start grand total at 0", () => {
    render(<OrderEntry />);
    const grandTotal = screen.getByRole("heading", {
      name: /grand total: \$/i,
    });
    expect(grandTotal).toHaveTextContent("0.00");
  });

  test("should update if scoop is added", async () => {
    render(<OrderEntry />);
    const grandTotal = screen.getByRole("heading", {
      name: /grand total: \$/i,
    });

    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    });
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "2");

    expect(grandTotal).toHaveTextContent("4.00");
    const cherriesCheckbox = await screen.findByRole("checkbox", {
      name: "Cherries",
    });
    userEvent.click(cherriesCheckbox);

    expect(grandTotal).toHaveTextContent("5.50");
  });

  test("should update if toppign is added", async () => {
    render(<OrderEntry />);
    const grandTotal = screen.getByRole("heading", {
      name: /grand total: \$/i,
    });

    const cherriesCheckbox = await screen.findByRole("checkbox", {
      name: "Cherries",
    });
    userEvent.click(cherriesCheckbox);
    expect(grandTotal).toHaveTextContent("1.50");

    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    });
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "2");
    expect(grandTotal).toHaveTextContent("5.50");
  });

  test("should update if item is removed", async () => {
    render(<OrderEntry />);
    const grandTotal = screen.getByRole("heading", {
      name: /grand total: \$/i,
    });
    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    });
    const cherriesCheckbox = await screen.findByRole("checkbox", {
      name: "Cherries",
    });

    userEvent.click(cherriesCheckbox);
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "1");

    expect(grandTotal).toHaveTextContent("3.50");

    // remove cherries
    userEvent.click(cherriesCheckbox);
    expect(grandTotal).toHaveTextContent("2.00");
  });
});
