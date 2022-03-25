import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useNotMarriedUsers } from "data_store/useNotMarriedUsers";

const Footer = () => {
  const { data, isLoading } = useNotMarriedUsers();

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <Box
      p={5}
      display="flex"
      alignItems={"center"}
      justifyContent={"space-between"}
      color={"white"}
      bgColor={"blue.800"}
    >
      <Heading size={"md"}>&copy; 2022 , MFE</Heading>
      <Heading size={"sm"}>Not Married Users: {data}</Heading>
    </Box>
  );
};

export default Footer;
