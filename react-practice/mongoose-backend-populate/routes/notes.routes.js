import { Router } from "express";
import { notesModel } from "../models/notes.model.js";

export const notesRouter = Router();

notesRouter.get("/notes/:user_id", async (req, res) => {
  const { user_id } = req.params;

  const notesData = await notesModel
    .find({ userId: user_id })
    .populate("userId")
    .then((data) => ({ success: true, data }))
    .catch((err) => ({ err: String(err), success: false }));
  return res.json(notesData);
});

notesRouter.get("/note/:user_id/:id", async (req, res) => {
  const { id, user_id } = req.params;
  const noteData = await notesModel
    .findOne(
      {
        userId: user_id,
      },
      {
        notes: { $elemMatch: { noteId: id } },
      }
    )
    .populate("userId");
  res.json(noteData);
});

notesRouter.post("/add-note", async (req, res) => {
  const { user_id, noteId, title, description } = req.body;
  const note = { noteId, title, description };
  const noteData = await notesModel.findOneAndUpdate(
    { userId: user_id },
    { $push: { notes: note } },
    { new: true }
  );
  return res.json(noteData);
});

notesRouter.delete("/delete-note/:user_id/:id", async (req, res) => {
  const { id, user_id } = req.params;
  const noteData = await notesModel.findOneAndUpdate(
    { userId: user_id },
    { $pull: { notes: { noteId: id } } },
    { new: true }
  );
  return res.json(noteData);
});

notesRouter.patch("/update-note", async (req, res) => {
  const { userId, noteId, title, description } = req.body;
  const noteData = await notesModel
    .findOneAndUpdate(
      { userId, "notes.noteId": noteId },
      {
        $set: {
          "notes.$.title": title,
          "notes.$.description": description,
        },
      },
      { new: true }
    )
    .then((data) => ({ success: true, data }))
    .catch((err) => ({ err: String(err), success: false }));
  return res.json(noteData);
});
