import { useDispatch, useSelector } from "react-redux";

export const useTodos = () => {
  const { todos, loading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return { todos, loading, dispatch };
};
