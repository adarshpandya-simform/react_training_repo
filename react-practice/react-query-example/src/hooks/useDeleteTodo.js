import axios from "axios";
import { useMutation } from "react-query";
import { queryClient } from "../../pages/_app";

// a custom hook to showcase modern and optimized
// data sending approach with react-query (uses mutation)
export const useDeleteTodo = () => {
  return useMutation(
    ({ id }) =>
      axios
        .delete(`http://localhost:2000/api/delete-todo/${id}`)
        .then((res) => {
          console.log(res.data);
          return res.data;
        }),
    {
      onMutate: ({ id }) => {
        const oldTodos = queryClient.getQueryData("todos");
        if (oldTodos) {
          queryClient.setQueryData("todos", (old) => [
            ...old.todos.filter((todo) => todo._id !== id),
          ]);
        }

        return () => queryClient.setQueryData("todos", oldTodos.todos);
      },
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
};
