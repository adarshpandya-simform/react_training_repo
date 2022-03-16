import { updateUser } from "../api/user.api";
import { useMutation } from "react-query";
import { queryClient } from "data_store/QueryClientWrapper";

export const useUpdateUser = () => {
  return useMutation(
    ({ id, isMarried }) => {
      return updateUser({ id, isMarried });
    },
    {
      onMutate: (newUser) => {
        const oldUsers = queryClient.getQueryData("users");
        if (oldUsers) {
          return queryClient.setQueryData("users", (old) => {
            return [
              ...old.map((user) => {
                if (user._id === newUser.id) {
                  user.isMarried = newUser.isMarried;
                }
                return user;
              }),
            ];
          });
        }
        return queryClient.setQueryData("users", oldUsers);
      },
      onSettled: () => {
        queryClient.invalidateQueries("users");
      },
    }
  );
};
