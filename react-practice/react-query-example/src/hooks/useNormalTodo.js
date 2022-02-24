import axios from "axios";
import { useEffect, useState } from "react";

// a custom hook to showcase traditional data
// fetching approach without react-query
export const useNormalTodo = (id) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTodo = async () => {
      setIsLoading(true);
      const { data } = await axios(`http://localhost:2000/api/todo/${id}`);
      setData(data);
      setIsLoading(false);
    };
    fetchTodo();
  }, []);

  return { data, isLoading };
};
