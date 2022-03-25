import axios from "axios";
import { useQuery } from "react-query";
import { queryClient } from "../../pages/_app";

// a custom hook to showcase modern and optimized
// data fetching approach with react-query
export const useTodo = (id) => {
  return useQuery(
    ["todos", id],
    () =>
      axios.get(`http://localhost:2000/api/todo/${id}`).then((res) => res.data),
    {
      initialData: () => {
        if (queryClient.getQueryData("todos")) {
          return queryClient
            .getQueryData("todos")
            .todos.find((todo) => todo._id == id);
        }
      },
    }
  );
};
