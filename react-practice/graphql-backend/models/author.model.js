import mongoose from "mongoose";

// defining schema for author
const authorSchema = new mongoose.Schema({
  authorId: { type: String, required: true },
  name: { type: String, required: true },
});

// creating and exporting authorModel
export const authorModel = mongoose.model("author", authorSchema);
