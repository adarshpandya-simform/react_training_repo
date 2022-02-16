import mongoose from "mongoose";

// defining schema for todos
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

// creating and exporting todoModel
export const todoModel = mongoose.model("todo", todoSchema);
