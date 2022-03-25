import { useQuery } from "react-query";
import { queryClient } from "../helpers/getQueryClient";
import { getTodo } from "../api";

// creating custom hook fot getting single todo
export const useTodo = (id) => {
  return useQuery(["todos", id], () => getTodo(id), {
    initialData: () => {
      if (queryClient.getQueryData("todos")) {
        return queryClient
          .getQueryData("todos")
          .find((todo) => todo._id === id);
      }
    },
  });
};
