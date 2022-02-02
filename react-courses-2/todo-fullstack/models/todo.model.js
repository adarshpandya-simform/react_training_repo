import mongoose, { Schema, model } from "mongoose";

// schema for todos [id,title,completed]
const todoSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

// exporting TodoModel
export const TodoModel = mongoose.models.Todo || model("Todo", todoSchema);
