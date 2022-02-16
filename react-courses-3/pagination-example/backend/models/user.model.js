import mongoose from "mongoose";

// creating user schema
const userSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  userName: { type: String, required: true },
});

// creating and exporting user model
export const userModel = mongoose.model("User", userSchema);
