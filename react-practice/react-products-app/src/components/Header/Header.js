import { Box, IconButton, Heading, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();

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
        <Heading size={"md"}>Shopify</Heading>
        <Box
          display={"flex"}
          marginLeft={5}
          w={300}
          justifyContent={"space-between"}
        >
          <Link to={"/"}>Home Page</Link>
          <Link to={"/products"}>Products Page</Link>
          <Link to={"/add-product"}>Add Products</Link>
        </Box>
      </Box>
      <div>
        <IconButton onClick={toggleColorMode} colorScheme={"whiteAlpha"}>
          {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        </IconButton>
      </div>
    </Box>
  );
};
