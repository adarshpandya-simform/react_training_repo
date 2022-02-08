import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

// defining initial options for paypal
const initialOptions = {
  "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
  currency: "USD",
  intent: "capture",
};

// PaypalComponent for rendering paypal with script provider
const PaypalComponent = () => {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        // creating order
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: "The cool book",
                amount: { value: "2" },
              },
            ],
          });
        }}
        // onOrderApproval handler
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalComponent;
