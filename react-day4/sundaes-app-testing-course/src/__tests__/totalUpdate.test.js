import { render, screen } from "../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../components/Options";
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
