import { Router } from "express";
import { nanoid } from "nanoid";

// exporting router
export const router = Router();

// initial dummy data
let initialTodos = [
  {
    id: "1",
    title: "Title 1",
  },
  {
    id: "2",
    title: "Title 2",
  },
  {
    id: "3",
    title: "Title 3",
  },
  {
    id: "4",
    title: "Title 4",
  },
];

// handlers

// @get /todos
router.get("/todos/", (req, res) => {
  res.json({ todos: initialTodos, success: true });
});

// @post /add-todo
router.post("/add-todo", (req, res) => {
  const todo = { id: nanoid(), title: req.body.title };
  initialTodos.push(todo);
  res.json({ todo, success: true });
});

// @delete /delete-todo/:id
router.delete("/delete-todo/:id", (req, res) => {
  const { id } = req.params;
  initialTodos = initialTodos.filter((todo) => todo.id !== id);
  res.json({ id, success: true });
});
