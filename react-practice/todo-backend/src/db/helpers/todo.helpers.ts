import { ITodo, todoModel } from "../../models";

/**
 *
 * @helper for getting todos
 */
export const getTodos = async (): Promise<ITodo[]> => {
	const users = await todoModel.find({});
	return users;
};

/**
 *
 * @helper for getting a todo
 */
export const getTodo = async (id: string): Promise<ITodo | null> => {
	const user: ITodo | null = await todoModel.findById(id);
	return user;
};

/**
 *
 * @helper for inserting todo
 */
export const insertTodo = async ({
	title,
	description,
}: {
	title: string;
	description: string;
}): Promise<ITodo> => {
	const user = new todoModel({ title, description });
	const userData: ITodo = await user.save();
	return userData;
};

/**
 *
 * @helper for deleting a todo
 */
export const deleteTodo = async (id: string): Promise<ITodo | null> => {
	const user: ITodo | null = await todoModel.findByIdAndDelete(id);
	return user;
};

/**
 *
 * @helper for updating a todo
 */
export const updateTodo = async (
	id: string,
	title: string,
	description: string,
	completed: boolean
): Promise<ITodo | null> => {
	const user: ITodo | null = await todoModel.findByIdAndUpdate(
		id,
		{ title, description, completed },
		{ new: true }
	);
	return user;
};
