import mongoose from "mongoose";
import { config } from "dotenv";

// accessing env vars
config();

// exporting db connection helper
export const connectDB = () => {
  mongoose.connect(process.env.MONGO_URL, {}, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("connected to db");
    }
  });
};
