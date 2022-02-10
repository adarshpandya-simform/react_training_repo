import { CalendarIcon } from "@chakra-ui/icons";
import { HStack, Button, Heading } from "@chakra-ui/react";

// ButtonComponent: for demonstrating
// all the types of button
const ButtonComponent = () => {
  return (
    <div>
      <Heading>button sizes</Heading>
      <HStack>
        <Button colorScheme={"blue"} size={"xs"}>
          hello
        </Button>
        <Button colorScheme={"blue"} size={"sm"}>
          hello
        </Button>
        <Button colorScheme={"blue"} size={"md"}>
          hello
        </Button>
        <Button colorScheme={"blue"} size={"lg"}>
          hello
        </Button>
      </HStack>
      <br />
      <Heading>button loading</Heading>
      <HStack>
        <Button
          isLoading
          loadingText="loading..."
          variant={"solid"}
          colorScheme={"blue"}
          size={"md"}
        >
          hello
        </Button>
        <Button
          isLoading
          leftIcon={<CalendarIcon />}
          colorScheme={"blue"}
          size={"md"}
        >
          select date
        </Button>
      </HStack>
      <br />
      <Heading>button variants</Heading>
      <HStack>
        <Button colorScheme={"blue"} size={"md"}>
          solid
        </Button>
        <Button variant={"link"} colorScheme={"blue"} size={"md"}>
          link
        </Button>
        <Button variant={"ghost"} colorScheme={"blue"} size={"md"}>
          ghost
        </Button>
        <Button variant={"outline"} colorScheme={"blue"} size={"md"}>
          outlined
        </Button>
        <Button variant={"dank"} colorScheme={"blue"} size={"md"}>
          custom variant
        </Button>
      </HStack>
    </div>
  );
};

export default ButtonComponent;
