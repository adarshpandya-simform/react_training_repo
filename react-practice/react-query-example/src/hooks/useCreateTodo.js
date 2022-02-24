import { useMutation } from "react-query";
import { queryClient } from "../../pages/_app";
import axios from "axios";

// a custom hook to showcase modern and optimized
// data sending approach with react-query (uses mutation)
export const useCreateTodo = () => {
  return useMutation(
    ({ title, description }) =>
      axios.post("http://localhost:2000/api/add-todo", { title, description }),
    {
      onMutate: (newTodo) => {
        const oldTodos = queryClient.getQueryData("todos");
        if (oldTodos) {
          queryClient.setQueryData("todos", (old) => {
            return [...old.todos, newTodo];
          });
        }

        return () => queryClient.setQueryData("todos", oldTodos.todos);
      },
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
};
