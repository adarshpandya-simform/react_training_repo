import express from "express";
import cors from "cors";
import { router } from "./routes/todo.routes.js";

const PORT = process.env.PORT || 2000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "hello" });
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`app is running on port : ${PORT}`);
});
