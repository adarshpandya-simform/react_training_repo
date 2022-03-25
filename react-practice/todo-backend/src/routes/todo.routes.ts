import { Router } from "express";
import {
	getTodoController,
	getTodosController,
	deleteTodoController,
	insertTodoController,
	updateTodoController,
} from "../controllers";

export const todoRouter = Router();

/**
 * @get todos
 * @url /api/todos
 */
todoRouter.get("/todos", getTodosController);

/**
 * @get todo
 * @url /api/todo/:id
 */
todoRouter.get("/todo/:id", getTodoController);

/**
 * @post todo
 * @url /api/add-todo
 */
todoRouter.post("/add-todo", insertTodoController);

/**
 * @delete todo
 * @url /api/delete-todo/:id
 */
todoRouter.delete("/delete-todo/:id", deleteTodoController);

/**
 * @patch todo
 * @url /api/update-todo
 */
todoRouter.patch("/update-todo", updateTodoController);
