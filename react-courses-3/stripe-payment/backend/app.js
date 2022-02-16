const express = require("express");
const dotenv = require("dotenv/config");
const stripe = require("stripe")(process.env.SECRET_KEY);
const cors = require("cors");

const PORT = process.env.PORT || 2000;
// initializing express app
const app = express();
// using cors so request should not block
app.use(cors());
app.use(express.json());

// defining store items
const storeItems = new Map([
  [1, { priceInCents: 10000, name: "Learn React Today" }],
  [2, { priceInCents: 20000, name: "Learn CSS Today" }],
]);

// post route @/checkout
app.post("/checkout", async (req, res) => {
  // getting session url from stripe
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        // finding item
        const storeItem = storeItems.get(item.id);
        return {
          // defining options
          price_data: {
            currency: "inr",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${"http://localhost:3000"}/success`,
      cancel_url: `${"http://localhost:3000"}/cancel`,
    });
    // returning response
    res.json({ url: session.url, success: true });
  } catch (e) {
    // catching errors
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
