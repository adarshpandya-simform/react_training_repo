import { getMarriedUsers } from "../api/user.api";
import { useQuery } from "react-query";

export const useMarriedUsers = () => {
  return useQuery("married_user_count", () => getMarriedUsers());
};
