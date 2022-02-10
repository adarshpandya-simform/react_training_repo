import { Center, HStack, Button } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

const CenterComponent = () => {
  return (
    <HStack>
      <Center width={10} height={10} bg={"tomato"} color={"white"}>
        <PhoneIcon />
      </Center>
      <Center
        borderRadius={"full"}
        width={10}
        height={10}
        bg={"tomato"}
        color={"white"}
      >
        <PhoneIcon />
      </Center>
      <Button
        textTransform={"capitalize"}
        leftIcon={<PhoneIcon />}
        bg="tomato"
        color={"white"}
      >
        call
      </Button>
    </HStack>
  );
};

export default CenterComponent;
