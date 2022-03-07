import { getTodos } from "../api";
import { useQuery } from "react-query";

// creating hook for getting all todos
export const useTodos = () => {
  return useQuery("todos", () => getTodos());
};
