import { useQuery } from "react-query";
import axios from "axios";

// a custom hook to showcase modern and optimized
// data fetching approach with react-query
export const useTodos = () => {
  return useQuery("todos", () =>
    axios.get("http://localhost:2000/api/todos").then((res) => res.data)
  );
};
