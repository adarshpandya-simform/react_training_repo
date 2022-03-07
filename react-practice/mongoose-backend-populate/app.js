import cors from "cors";
import { config } from "dotenv";
import express from "express";
import { connectDB } from "./db/db.config.js";
import { notesRouter } from "./routes/notes.routes.js";
import { userRouter } from "./routes/user.routes.js";

config();
connectDB();

const PORT = process.env.PORT || 2000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "api running", success: true });
});

app.use("/api", userRouter);
app.use("/api", notesRouter);

app.listen(PORT, () => {
  console.log(`app is running on PORT :${PORT}`);
});
