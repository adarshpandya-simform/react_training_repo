import { render } from "@testing-library/react";
import { OrderDetailsProvider } from "../contexts/order.context";

export const renderWithContext = (ui, options) =>
  render(ui, { wrapper: OrderDetailsProvider, ...options });

// re export
export * from "@testing-library/react";

// override render method
export { renderWithContext as render };
