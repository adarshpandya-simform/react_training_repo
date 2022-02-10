import { Button, useColorMode } from "@chakra-ui/react";

// DarkModeButton: for rendering a button which toggles
// to dark mode
const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "dark" : "light"}
    </Button>
  );
};

export default DarkModeButton;
