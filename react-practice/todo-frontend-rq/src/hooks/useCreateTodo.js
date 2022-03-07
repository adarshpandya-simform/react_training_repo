import { useMutation } from "react-query";
import { insertTodo } from "../api";
import { queryClient } from "../helpers/getQueryClient";

// creating custom hook for create todo mutation
export const useCreateTodo = () => {
  return useMutation(
    ({ title, description }) => {
      return insertTodo({ title, description });
    },
    {
      onMutate: (newTodo) => {
        const oldTodos = queryClient.getQueryData("todos");
        if (oldTodos) {
          queryClient.setQueryData("todos", (old) => {
            return [...old, newTodo];
          });
        }

        return () => queryClient.setQueryData("todos", oldTodos);
      },
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
};
