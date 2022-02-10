import {
  Button,
  useColorMode,
  HStack,
  LightMode,
  DarkMode,
} from "@chakra-ui/react";

const ForcedModeComponents = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <LightMode>
        <Button size={"sm"} colorScheme="whatsapp">
          Light Mode Always
        </Button>
      </LightMode>
      <DarkMode>
        <Button size={"sm"} colorScheme="whatsapp">
          Dark Mode Always
        </Button>
      </DarkMode>
      <Button size={"sm"} onClick={toggleColorMode} colorScheme="whatsapp">
        Toggalable Button with{" "}
        {colorMode === "light" ? "light mode" : "dark mode"}
      </Button>
    </HStack>
  );
};

export default ForcedModeComponents;
