import { getNotMarriedUsers } from "../api/user.api";
import { useQuery } from "react-query";

export const useNotMarriedUsers = () => {
  return useQuery("not_married_user_count", () => getNotMarriedUsers());
};
