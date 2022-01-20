import React from "react";
import { useSelector } from "react-redux";

const DisplayTodos = () => {
  const { todos, isLoading } = useSelector((state) => state);

  return (
    <div>
      {isLoading === true && <p>loading...</p>}
      {todos.length !== 0 && (
        <table border={1}>
          <thead style={{ textAlign: "left" }}>
            <tr>
              <th>id</th>
              <th>todo</th>
              <th>status</th>
              <th>checkbox</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? "completed" : "incomplete"}</td>
                <td>
                  <input
                    type={"checkbox"}
                    checked={todo.completed}
                    onChange={() => {}}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DisplayTodos;
