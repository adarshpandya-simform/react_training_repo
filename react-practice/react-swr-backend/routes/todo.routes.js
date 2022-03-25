import { Router } from "express";
import mongoose from "mongoose";
import { TodoModel } from "../models/todo.model.js";

// exporting router
export const router = Router();

// handlers

// @get /todos
router.get("/todos/", async (req, res) => {
  const todos = await TodoModel.find({});
  res.json({ todos, success: true });
});

// @get /todo/:id
router.get("/todo/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await TodoModel.findById(id);
    res.json({ todo, success: true });
  } catch (error) {
    res.json({ error, success: false });
  }
});

// @post /add-todo
router.post("/add-todo", async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const todoCreator = new TodoModel({ title, description });
  const todo = await todoCreator.save();
  res.json({ todo, success: true });
});

// @delete /delete-todo/:id
router.delete("/delete-todo/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await TodoModel.findByIdAndDelete(id);
    res.json({ todo, success: true });
  } catch (error) {
    res.json({ error, success: false });
  }
});
