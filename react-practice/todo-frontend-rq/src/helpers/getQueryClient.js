import { QueryClient } from "react-query";
import { getTodos } from "../api";

// creating and exporting queryClient
export const queryClient = new QueryClient();

// prefetching todos
export const prefetchTodos = async () => {
  await queryClient.prefetchQuery("todos", () => getTodos());
};
