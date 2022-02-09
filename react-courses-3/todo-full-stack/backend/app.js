import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { connectDB } from "./config/db.config.js";
import { router } from "./routes/todo.routes.js";

config();
connectDB();

const PORT = process.env.PORT || 2000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
