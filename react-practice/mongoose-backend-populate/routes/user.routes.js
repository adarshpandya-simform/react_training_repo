import { Router } from "express";
import { notesModel } from "../models/notes.model.js";
import { userModel } from "../models/user.model.js";

export const userRouter = Router();

userRouter.get("/user-data/:id", async (req, res) => {
  const { id } = req.params;
  const response = await userModel
    .findById(id)
    .then((data) => ({ success: true, data }))
    .catch((err) => ({ err: String(err), success: false }));
  return res.json(response);
});

userRouter.post("/add-user", async (req, res) => {
  const { name, email, password } = req.body;
  const user = new userModel({ name, email, password });
  const response = await user
    .save()
    .then((data) => ({ success: true, data }))
    .catch((err) => ({ err: String(err), success: false }));
  const notes = new notesModel({ userId: response.data._id, notes: [] });
  const notesData = await notes.save();
  return res.json({ response, notesData });
});

userRouter.patch("/update-user", async (req, res) => {
  const { id, name, email, password } = req.body;
  const response = await userModel
    .findByIdAndUpdate(id, { name, email, password }, { new: true })
    .then((data) => ({ success: true, data }))
    .catch((err) => ({ err: String(err), success: false }));
  return res.json(response);
});

userRouter.delete("/delete-user/:id", async (req, res) => {
  const { id } = req.params;
  const response = await userModel
    .findByIdAndDelete(id)
    .then((data) => ({ success: true, data }))
    .catch((err) => ({ success: false, err: String(err) }));
  return res.json(response);
});
