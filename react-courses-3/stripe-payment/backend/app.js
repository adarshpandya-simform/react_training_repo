const express = require("express");
const dotenv = require("dotenv/config");
const stripe = require("stripe")(process.env.SECRET_KEY);
const cors = require("cors");

const PORT = process.env.PORT || 2000;
const app = express();
app.use(cors());
app.use(express.json());

const storeItems = new Map([
  [1, { priceInCents: 10000, name: "Learn React Today" }],
  [2, { priceInCents: 20000, name: "Learn CSS Today" }],
]);

app.post("/checkout", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.id);
        return {
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
    res.json({ url: session.url, success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
