import { useEffect, useState } from "react";
import { deleteTodo, fetchTodos } from "../api/api";

const TodosPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodosAsync = async () => {
      const data = await fetchTodos();
      if (data.success) {
        setTodos(data.todos);
      }
    };
    fetchTodosAsync();
    console.log("TodosPage Rendered");
  }, []);

  const handleDeleteTodo = async (id) => {
    const data = await deleteTodo(id);
    console.log(data);
  };

  return (
    <div>
      <br />
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.title}</span>
          <button
            onClick={() => {
              handleDeleteTodo(todo.id);
            }}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodosPage;
