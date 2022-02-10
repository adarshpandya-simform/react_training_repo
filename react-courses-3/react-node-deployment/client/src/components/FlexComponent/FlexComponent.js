import { Flex, Center, Square, Text, Box } from "@chakra-ui/react";

const FlexComponent = () => {
  return (
    <>
      {/* 1st row */}
      <Flex color="white">
        <Center flex={3} w="100px" bg="teal.300">
          <Text>Box 1</Text>
        </Center>
        <Square flex={6} bg="blue.300" size="150px">
          <Text>Box 2</Text>
        </Square>
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          flex={3}
          bg="orange.300"
        >
          <Text>Box 3</Text>
        </Box>
      </Flex>
      <br />
      {/* 2nd row */}
      <Flex color="white">
        <Center flex={1} w="100px" bg="teal.300">
          <Text>Box 1</Text>
        </Center>
        <Square flex={2} bg="blue.300" size="150px">
          <Text>Box 2</Text>
        </Square>
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          flex={9}
          bg="orange.300"
        >
          <Text>Box 3</Text>
        </Box>
      </Flex>
      <br />
      {/* 3st row */}
      <Flex color="white">
        <Center flex={9} w="100px" bg="teal.300">
          <Text>Box 1</Text>
        </Center>
        <Square flex={2} bg="blue.300" size="150px">
          <Text>Box 2</Text>
        </Square>
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          flex={1}
          bg="orange.300"
        >
          <Text>Box 3</Text>
        </Box>
      </Flex>
    </>
  );
};

export default FlexComponent;
