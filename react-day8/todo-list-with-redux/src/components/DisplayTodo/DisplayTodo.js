import { useDispatch, useSelector } from "react-redux";
import { checkTodo, deleteTodo } from "../../features/todoSlice";

const DisplayTodo = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  const handleDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const handleCheckbox = (completed, id) => {
    dispatch(checkTodo({ completed, id }));
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type={"checkbox"}
            checked={todo.completed}
            onChange={(e) => handleCheckbox(e.target.checked, todo.id)}
          />
          <span
            style={todo.completed ? { textDecoration: "line-through" } : {}}
          >
            {todo.title}
          </span>
          <button
            onClick={() => {
              handleDelete(todo.id);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default DisplayTodo;
