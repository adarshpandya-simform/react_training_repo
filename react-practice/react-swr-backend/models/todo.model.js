import mongoose from "mongoose";

// defining schema for todos
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

// creating and exporting todo model
export const TodoModel = mongoose.model("todo", todoSchema);
