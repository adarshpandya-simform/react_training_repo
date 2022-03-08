import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../store/useStore";

const TodoDetailPage = () => {
  const { id } = useParams();
  const { todos, isLoading, getTodos, updateTodo, deleteTodo } = useStore(
    (state) => state
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  const handleUpdateTodo = async () => {
    await updateTodo({ id, title, description, completed });
  };

  const handleDeleteTodo = async () => {
    await deleteTodo({ id });
    navigate("/todos");
  };

  useEffect(() => {
    if (todos) {
      todos.forEach((todo) => {
        if (todo._id === id) {
          setTitle(todo.title);
          setDescription(todo.description);
          setCompleted(todo.completed);
        }
      });
    } else {
      (async () => {
        await getTodos();
      })();
    }
  }, [todos]);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <br />
      {todos.map((todo) => (
        <div key={todo._id}>
          {todo._id === id && (
            <div>
              <input
                type={"text"}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <br />
              <br />
              <textarea
                cols={100}
                rows={8}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <br />
              <br />
              <input
                type={"checkbox"}
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
              />
              {JSON.stringify(completed)}
              <br />
              <br />
              <button onClick={handleUpdateTodo}>update todo</button>
              <button onClick={handleDeleteTodo}>delete todo</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoDetailPage;
