import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <Box
      p={5}
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
      color={"white"}
      bgColor={"blue.800"}
    >
      <Heading size={"sm"}>This is random footer</Heading>
    </Box>
  );
};
