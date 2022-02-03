import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect } from "react";
import AddTodo from "./components/AddTodo";
import DisplayTodos from "./components/DisplayTodos";
import { db } from "./config/firebase.config";
import { useTodos } from "./hooks/useTodos";

// App component which renders InputTodo and DisplayTodo
const App = () => {
  const { loadTodosAction } = useTodos();

  // dispatching loadTodosAction on app mount
  useEffect(() => {
    const myQuery = query(collection(db, "todos"));
    const unsub = onSnapshot(myQuery, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), doc_id: doc.id });
      });
      loadTodosAction(todosArray);
    });

    // cleanup fn
    return () => unsub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* rendering components */}
      <AddTodo />
      <DisplayTodos />
    </div>
  );
};

export default App;
