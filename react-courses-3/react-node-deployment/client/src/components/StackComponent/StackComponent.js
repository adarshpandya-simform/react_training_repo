import { Button, Heading, HStack, VStack } from "@chakra-ui/react";
import { PhoneIcon, SunIcon, ChatIcon } from "@chakra-ui/icons";

const StackComponent = () => {
  return (
    <>
      <Heading color={"tomato"}>Vertical Stack</Heading>
      <VStack align={"self-start"}>
        <Button leftIcon={<PhoneIcon />} colorScheme={"orange"}>
          call
        </Button>
        <Button leftIcon={<SunIcon />} colorScheme={"orange"}>
          weather
        </Button>
        <Button leftIcon={<ChatIcon />} colorScheme={"orange"}>
          chat
        </Button>
      </VStack>
      <br />
      <br />
      <Heading color={"tomato"}>Horizontal Stack</Heading>
      <HStack>
        <Button leftIcon={<PhoneIcon />} colorScheme={"orange"}>
          call
        </Button>
        <Button leftIcon={<SunIcon />} colorScheme={"orange"}>
          weather
        </Button>
        <Button leftIcon={<ChatIcon />} colorScheme={"orange"}>
          chat
        </Button>
      </HStack>
    </>
  );
};

export default StackComponent;
