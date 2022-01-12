import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/scoops", (req, res, context) => {
    return res(
      context.json([
        { name: "Chocolate", imagePath: "/images/chocolate.png" },
        { name: "Vanilla", imagePath: "/images/anilla.png" },
      ])
    );
  }),
  rest.get("http://localhost:3030/toppings", (req, res, context) => {
    return res(
      context.json([
        { name: "Cherries", imagePath: "images/cherries.png" },
        { name: "M&Ms", imagePath: "images/m-and-ms.png" },
        { name: "Hot Fudge", imagePath: "images/hot-fudge.png" },
      ])
    );
  }),
  rest.post("http://localhost:3030/order", (req, res, context) => {
    return res(context.json({ orderNumber: 19238091283 }));
  }),
];
