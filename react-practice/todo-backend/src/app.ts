import express, { Application } from "express";
import { config } from "dotenv";
import { connectDB } from "./db";
import { todoRouter } from "./routes";
import cors from "cors";

config();

connectDB();

const PORT: string | number = process.env.PORT || 2000;

// creating app instance
const app: Application = express();

// applying middlewares
app.use(express.json());
app.use(cors());

// applying router
app.use("/api", todoRouter);

// listening on port
app.listen(PORT, () => {
	console.log(`app is running on port ${PORT}`);
});
