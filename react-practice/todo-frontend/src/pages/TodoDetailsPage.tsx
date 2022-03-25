import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTodos } from "../hooks/useTodos";
import { ITodo } from "../features/todoSlice";

// TodoDetailsPage component to show todo details
const TodoDetailsPage: FC = (): JSX.Element => {
  const { id } = useParams();
  const { isLoading, todos, updateTodo, deleteTodo } = useTodos();
  const [todo, setTodo] = useState<ITodo | null>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTodo(todos.filter((todo) => todo._id === id)[0]);
  }, []);

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
      setCompleted(todo.completed);
    }
  }, [todo]);

  useEffect(() => {
    setTodo(todos.filter((todo) => todo._id === id)[0]);
  }, [todos]);

  const handleUpdate = () => {
    if (id) {
      updateTodo({ id, title, completed, description });
    }
  };

  const handleDelete = () => {
    if (id) {
      deleteTodo({ id });
      navigate("/todos");
    }
  };

  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
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
      <input
        type={"text"}
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type={"checkbox"}
        checked={completed}
        onChange={(e) => {
          setCompleted(e.target.checked);
        }}
      />
      <span>{completed ? "completed" : "incomplete"}</span>
      <br />
      <br />
      <button onClick={handleUpdate}>update</button>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};

export default TodoDetailsPage;
