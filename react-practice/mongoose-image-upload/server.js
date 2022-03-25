import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { connectDB } from "./db/config/db.config.js";
import { productRouter } from "./routes/product.routes.js";

config();
connectDB();
const PORT = process.env.PORT || 2000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    msg: "product server is running",
  });
});

app.use("/api", productRouter);

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
