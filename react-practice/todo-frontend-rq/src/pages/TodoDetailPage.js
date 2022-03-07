import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import { useTodo, useDeleteTodo, useUpdateTodo } from "../hooks";

// TodoDetailsPage for showing todo details + update/delete todo
const TodoDetailPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const { data, isLoading } = useTodo(id);
  const navigate = useNavigate();
  const { mutateAsync: deleteTodoAsyncMutation } = useDeleteTodo();
  const { mutateAsync: updateTodoAsyncMutation } = useUpdateTodo();

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDescription(data.description);
      setCompleted(data.completed);
    }
  }, [data]);

  const handleUpdateTodo = async () => {
    await updateTodoAsyncMutation({ id, title, description, completed });
  };

  const handleDeleteTodo = async () => {
    await deleteTodoAsyncMutation({ id });
    navigate("/todos");
  };

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div className="page-container">
      {data && !isLoading && (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Todos App | {data.title}</title>
            <meta name="description" content={data.description} />
          </Helmet>
          <h2>{title}</h2>
          <br />
          <input
            type={"text"}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br />
          <input
            type={"text"}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <br />

          <input
            type={"checkbox"}
            checked={completed}
            onChange={(e) => {
              setCompleted(e.target.checked);
            }}
          />
          {completed ? "Completed" : "Incompleted"}
          <br />
          <br />
          <button onClick={handleDeleteTodo}>delete todo</button>
          <button onClick={handleUpdateTodo}>update todo</button>
        </>
      )}
    </div>
  );
};

export default TodoDetailPage;
