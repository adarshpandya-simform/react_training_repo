import React, { useState } from "react";
import { useCreateUser } from "data_store/useCreateUser";
import { Box, Input, Select, Button } from "@chakra-ui/react";

const AddUser = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [marriedStatus, setMarriedStatus] = useState("");
  const { mutateAsync, isLoading } = useCreateUser();

  const handleAddUser = async () => {
    if (
      marriedStatus === "" ||
      marriedStatus === undefined ||
      marriedStatus === null ||
      name === "" ||
      surname === "" ||
      name === undefined ||
      name === null ||
      surname === undefined ||
      surname === null
    ) {
      alert("one or more fields are missing!!!");
    } else {
      await mutateAsync({
        name,
        surname,
        isMarried: marriedStatus === "married" ? true : false,
      });
      setName("");
      setSurname("");
      setMarriedStatus("");
    }
  };

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <Box p={5}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Input
          placeholder="enter name"
          value={name}
          borderColor={"gray.700"}
          onChange={(e) => {
            setName(e.target.value);
          }}
          w={"400px"}
        />
        <Input
          placeholder="enter surname"
          borderColor={"gray.700"}
          value={surname}
          onChange={(e) => {
            setSurname(e.target.value);
          }}
          w={"400px"}
        />
        <Select
          borderColor={"gray.700"}
          placeholder="Select status"
          onChange={(e) => {
            setMarriedStatus(e.target.value);
          }}
          w={"400px"}
        >
          <option value={"married"}>Married</option>
          <option value={"not_married"}>Not Married</option>
        </Select>
      </Box>
      <br />
      <Button colorScheme={"blue"} onClick={handleAddUser} isFullWidth={true}>
        ADD USER
      </Button>
    </Box>
  );
};

export default AddUser;
