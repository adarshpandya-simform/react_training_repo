import { Request, RequestHandler, Response } from "express";
import {
	getTodos,
	getTodo,
	insertTodo,
	deleteTodo,
	updateTodo,
} from "../db/helpers/todo.helpers";

/**
 * @controller for getting todos
 * @method : @get
 */
const getTodosController: RequestHandler = async (
	_: Request,
	res: Response
) => {
	try {
		const todos = await getTodos();
		return res.json({ success: true, data: { todos } });
	} catch (error) {
		res.json({
			success: false,
			data: null,
			error: String(error),
		});
	}
};

/**
 * @controller for getting a single todo
 * @method : @get
 */
const getTodoController: RequestHandler = async (
	req: Request,
	res: Response
) => {
	const { id } = req.params;
	try {
		const todo = await getTodo(id);
		return res.json({ success: true, data: { todo } });
	} catch (error) {
		res.json({
			success: false,
			data: null,
			error: String(error),
		});
	}
};

/**
 * @controller for adding todos
 * @method : @post
 */
const insertTodoController: RequestHandler = async (
	req: Request,
	res: Response
) => {
	const { title, description } = req.body;
	try {
		const todo = await insertTodo({ title, description });
		return res.json({ success: true, data: { todo } });
	} catch (error) {
		res.json({
			success: false,
			data: null,
			error: String(error),
		});
	}
};

/**
 * @controller for deleting a todo
 * @method : @delete
 */
const deleteTodoController: RequestHandler = async (
	req: Request,
	res: Response
) => {
	const { id } = req.params;
	try {
		const todo = await deleteTodo(id);
		return res.json({ success: true, data: { todo } });
	} catch (error) {
		res.json({
			success: false,
			data: null,
			error: String(error),
		});
	}
};

/**
 * @controller for updating a todo
 * @method : @patch
 */
const updateTodoController: RequestHandler = async (
	req: Request,
	res: Response
) => {
	const { id, title, description, completed } = req.body;
	try {
		const todo = await updateTodo(id, title, description, completed);
		return res.json({ success: true, data: { todo } });
	} catch (error) {
		res.json({
			success: false,
			data: null,
			error: String(error),
		});
	}
};

export {
	getTodosController,
	getTodoController,
	insertTodoController,
	updateTodoController,
	deleteTodoController,
};
