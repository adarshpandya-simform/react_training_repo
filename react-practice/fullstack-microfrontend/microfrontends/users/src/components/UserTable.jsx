import React from "react";
import {
  Box,
  IconButton,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Checkbox,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useUsers } from "data_store/useUsers";
import { useDeleteUser } from "data_store/useDeleteUser";
import { useUpdateUser } from "data_store/useUpdateUser";

const UserTable = () => {
  const { data, isLoading } = useUsers();
  const { mutateAsync, isLoading: isDeleteLoading } = useDeleteUser();
  const { mutateAsync: updateMutateAsync, isLoading: isUpdateLoading } =
    useUpdateUser();

  if (isLoading || isDeleteLoading || isUpdateLoading) {
    return <p>loading...</p>;
  }

  const handleUpdateUser = async (isMarried, id) => {
    await updateMutateAsync({ id, isMarried });
  };

  const handleDeleteUser = async (id) => {
    await mutateAsync({ id });
  };

  return (
    <Box p={5}>
      <Table
        borderColor={"gray.300"}
        borderWidth={1}
        variant="striped"
        colorScheme="blue"
      >
        <TableCaption>User Marital Data</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Surname</Th>
            <Th>Is Married</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.map((user) => (
              <Tr>
                <Td>{user.name}</Td>
                <Td>{user.surname}</Td>
                <Td>
                  <Checkbox
                    defaultChecked={user.isMarried}
                    colorScheme={"blue"}
                    onChange={(e) => {
                      handleUpdateUser(e.target.checked, user._id);
                    }}
                  />
                </Td>
                <Td>
                  <IconButton
                    onClick={() => {
                      handleDeleteUser(user._id);
                    }}
                    colorScheme={"red"}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default UserTable;
