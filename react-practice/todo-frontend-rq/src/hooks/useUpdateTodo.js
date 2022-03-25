import { useMutation } from "react-query";
import { updateTodo } from "../api";
import { queryClient } from "../helpers/getQueryClient";

// creating custom hook for updating todo
export const useUpdateTodo = () => {
  return useMutation(
    ({ id, title, completed, description }) => {
      return updateTodo({ id, completed, title, description });
    },
    {
      onMutate: (newTodo) => {
        const oldTodos = queryClient.getQueriesData("todos");
        if (oldTodos) {
          return queryClient.setQueryData("todos", (old) => {
            return [
              ...old.map((todo) => {
                if (todo._id === newTodo.id) {
                  todo.title = newTodo.title;
                  todo.description = newTodo.description;
                  todo.completed = newTodo.completed;
                }
                return todo;
              }),
            ];
          });
        }
        return queryClient.setQueryData("todos", oldTodos);
      },
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
};
