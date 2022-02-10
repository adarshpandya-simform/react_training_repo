import {
  Button,
  useColorMode,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// DarkModeComponent: for demonstrating
// how we can set a component to react
// on a theme change
const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.300", "#262626");
  const color = useColorModeValue("#262626", "white");

  return (
    <>
      <Box p={4} bg={bg} color={color}>
        <Text>This box's style will change based on theme</Text>
      </Box>
      <br />
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "dark" : "light"}
      </Button>
    </>
  );
};

export default DarkModeButton;
