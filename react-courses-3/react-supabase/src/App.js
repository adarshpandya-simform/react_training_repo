import React, { useEffect } from "react";
import DisplayTodo from "./components/DisplayTodo";
import InputTodo from "./components/InputTodo";
import { useTodos } from "./hooks/useTodos";
import { getTodos } from "./db/db.operations";

// App component
const App = () => {
  const { fetchTodosDispatcher, setLoadingDispatcher } = useTodos();

  // fetching todos on app mount
  useEffect(() => {
    (async () => {
      setLoadingDispatcher(true);
      const { data, error } = await getTodos();
      if (error) {
        console.log("error occured");
        console.log(error);
      } else {
        fetchTodosDispatcher(data);
      }
      setLoadingDispatcher(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Rendering InputTodo and DisplayTodo*/}
      <InputTodo />
      <DisplayTodo />
    </>
  );
};

export default App;
