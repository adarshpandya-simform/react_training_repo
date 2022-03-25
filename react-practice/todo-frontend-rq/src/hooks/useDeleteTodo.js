import { useMutation } from "react-query";
import { queryClient } from "../helpers/getQueryClient";
import { deleteTodo } from "../api";

// creating custom hook for deleting todo
export const useDeleteTodo = () => {
  return useMutation(
    ({ id }) => {
      return deleteTodo(id);
    },
    {
      onMutate: ({ id }) => {
        const oldTodos = queryClient.getQueryData("todos");
        if (oldTodos) {
          queryClient.setQueryData("todos", (old) => [
            ...old.filter((todo) => todo._id !== id),
          ]);
        }

        return () => queryClient.setQueryData("todos", oldTodos);
      },
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
};
