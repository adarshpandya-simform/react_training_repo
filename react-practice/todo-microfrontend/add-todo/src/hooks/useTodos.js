import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../features/todo.slice";

export const useTodos = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTodoDispatcher = (todo) => {
    dispatch(addTodo(todo));
  };

  const deleteTodoDispatcher = ({ id }) => {
    dispatch(removeTodo({ id }));
  };

  const updateTodoDispatcher = ({ id, completed }) => {
    dispatch(updateTodo({ id, completed }));
  };

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const incompleteTodos = todos.filter((todo) => !todo.completed).length;

  return {
    todos,
    addTodoDispatcher,
    deleteTodoDispatcher,
    updateTodoDispatcher,
    completedTodos,
    incompleteTodos,
  };
};
