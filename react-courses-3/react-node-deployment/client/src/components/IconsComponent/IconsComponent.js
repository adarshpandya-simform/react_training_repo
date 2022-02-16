import { SunIcon, MoonIcon, SearchIcon, PhoneIcon } from "@chakra-ui/icons";
import { IconButton, HStack, useColorMode } from "@chakra-ui/react";

// IconsComponent: for demonstrating IconButton component
const IconsComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <IconButton icon={<SearchIcon />} />
      <IconButton icon={<SearchIcon />} colorScheme={"teal"} />
      <IconButton icon={<PhoneIcon />} colorScheme={"teal"} />
      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        colorScheme={"blue"}
      />
    </HStack>
  );
};

export default IconsComponent;
