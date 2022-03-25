import { useEffect, useState } from "react";
import axios from "axios";

// a custom hook to showcase traditional data
// fetching approach without react-query
export const useNormalTodos = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true);
      const { data } = await axios("http://localhost:2000/api/todos");
      setData(data);
      setIsLoading(false);
    };
    fetchTodos();
  }, []);

  return { data, isLoading };
};
