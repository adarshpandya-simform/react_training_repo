import { deleteUser } from "../api/user.api";
import { useMutation } from "react-query";
import { queryClient } from "data_store/QueryClientWrapper";

export const useDeleteUser = () => {
  return useMutation(
    ({ id }) => {
      return deleteUser({ id });
    },
    {
      onMutate: ({ _id }) => {
        const oldUsers = queryClient.getQueryData("users");
        if (oldUsers) {
          queryClient.setQueryData("users", (old) => [
            ...old.filter((user) => user._id !== _id),
          ]);
        }

        return () => queryClient.setQueryData("users", oldUsers);
      },
      onSettled: () => {
        queryClient.invalidateQueries("users");
      },
    }
  );
};
