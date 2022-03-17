import { addUser } from "../api/user.api";
import { useMutation } from "react-query";
import { queryClient } from "data_store/RQWrapper";

export const useCreateUser = () => {
  return useMutation(
    ({ name, surname, isMarried }) => {
      return addUser({ isMarried, name, surname });
    },
    {
      onMutate: (newUser) => {
        const oldUsers = queryClient.getQueryData("users");
        if (oldUsers) {
          queryClient.setQueryData("users", (old) => {
            return [...old, newUser];
          });
        }

        return () => queryClient.setQueryData("users", oldUsers);
      },
      onSettled: () => {
        queryClient.invalidateQueries("users");
        queryClient.invalidateQueries("married_user_count");
        queryClient.invalidateQueries("not_married_user_count");
      },
    }
  );
};
