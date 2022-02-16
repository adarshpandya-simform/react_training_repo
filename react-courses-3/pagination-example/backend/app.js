import experss from "express";
import cors from "cors";
import { config } from "dotenv";
import { connectDB } from "./config/db.config.js";
import { userRouter } from "./routes/user.routes.js";

// accessing env vars
config();
// connecting mongoDB
connectDB();

// setting PORT
const PORT = process.env.PORT || 2000;
// creating express instance
const app = experss();

// setting some middlewares
app.use(experss.json());
app.use(cors());

// controller for route @ /api/users
app.use("/api/users", userRouter);

// server listening on port
app.listen(PORT, () => {
  console.log(`app is running on port: {${PORT}}`);
});
