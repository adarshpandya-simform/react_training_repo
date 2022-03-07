import mongoose from "mongoose";
import { config } from "dotenv";

config();

export const connectDB = () => {
  mongoose.connect(process.env.MONGO_URL, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected");
    }
  });
};
