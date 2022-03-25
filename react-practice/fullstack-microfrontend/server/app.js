const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.routes");
const connectDB = require("./config/db.config");
require("dotenv/config");

connectDB();

const app = express();
const PORT = process.env.PORT || 2000;

app.use(cors());
app.use(express.json());

app.use("/api", userRouter);

app.listen(PORT, () => {
	console.log(`app is running on port: ${PORT}`);
});
