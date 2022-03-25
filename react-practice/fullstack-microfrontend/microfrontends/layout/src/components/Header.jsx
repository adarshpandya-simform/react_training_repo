import React from "react";
import { Box, Heading, IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useMarriedUsers } from "data_store/useMarriedUsers";

const Header = () => {
  const { data, isLoading } = useMarriedUsers();
  const { colorMode, toggleColorMode } = useColorMode();

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
      <Box display={"flex"}>
        <Heading size={"md"}>Fullstack MFE</Heading>
      </Box>
      <Box>
        <IconButton onClick={toggleColorMode} colorScheme={"whiteAlpha"}>
          {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        </IconButton>
      </Box>
      <Box display={"flex"} justifyContent={"center"} alignContent={"center"}>
        <Heading size={"sm"}>Married Users: {data}</Heading>
      </Box>
    </Box>
  );
};

export default Header;
