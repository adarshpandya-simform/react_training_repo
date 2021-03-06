import { render, screen, waitFor } from "../test-utils/testing-library-utils";
import OrderEntry from "../components/OrderEntry";
import { rest } from "msw";
import { server } from "../mocks/server";

test.only("should handle error for scoop and toppings route", async () => {
  // reset handlers
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, context) => {
      return res(context.status(500));
    }),
    rest.get("http://localhost:3030/toppings", (req, res, context) => {
      return res(context.status(500));
    })
  );

  // render component
  render(<OrderEntry setOrderPhase={jest.fn()} />);

  await waitFor(async () => {
    const alert = await screen.findAllByRole("alert");

    expect(alert).toHaveLength(2);
  });
});

// both of this tests will be skipper
test("should skip this test", () => {});

test.skip("this will also be skipped", () => {});
