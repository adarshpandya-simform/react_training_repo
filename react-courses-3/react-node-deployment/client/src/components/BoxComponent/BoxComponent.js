import { Box, Text } from "@chakra-ui/react";

/**
 * BoxComponent for demonstrating usage
 * of 'Box' component
 */
const BoxComponent = () => {
  return (
    <Box p={4} bgColor={"blackAlpha.900"}>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to My Site
      </Text>
    </Box>
  );
};

export default BoxComponent;
