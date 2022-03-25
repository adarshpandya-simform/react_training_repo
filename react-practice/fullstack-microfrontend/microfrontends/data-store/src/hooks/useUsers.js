import { getUsers } from "../api/user.api";
import { useQuery } from "react-query";

export const useUsers = () => {
  return useQuery("users", () => getUsers());
};
