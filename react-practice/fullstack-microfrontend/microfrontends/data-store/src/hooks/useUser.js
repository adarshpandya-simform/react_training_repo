import { getUser } from "../api/user.api";
import { useQuery } from "react-query";
import { queryClient } from "data_store/QueryClientWrapper";

export const useUser = (id) => {
  return useQuery(["users", id], () => getUser({ id }), {
    initialData: () => {
      if (queryClient.getQueryData("users")) {
        return queryClient
          .getQueryData("users")
          .find((user) => user._id === id);
      }
    },
  });
};
