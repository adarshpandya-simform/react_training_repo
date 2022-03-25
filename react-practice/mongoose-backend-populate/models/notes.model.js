import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  notes: [
    {
      noteId: { type: String },
      title: { type: String },
      description: { type: String },
    },
  ],
});

export const notesModel = mongoose.model("Note", noteSchema);
