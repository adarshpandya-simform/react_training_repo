import { Button, useColorMode } from "@chakra-ui/react";

const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "dark" : "light"}
    </Button>
  );
};

export default DarkModeButton;
