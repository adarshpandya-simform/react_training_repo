import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { connectDB } from "./config/db.config.js";
import { router } from "./routes/todo.routes.js";

// accessing env vars
config();
// connecting to Mongo DB
connectDB();

// defining PORT for our app
const PORT = process.env.PORT || 2000;
// creating app from express instance
const app = express();

// enabling json support
app.use(express.json());

// enabling cors
app.use(cors());

// handling all /api requests with router
app.use("/api", router);

// starting and listening to requests
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
