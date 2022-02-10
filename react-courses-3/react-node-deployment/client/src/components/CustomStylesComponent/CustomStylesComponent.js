import { Heading, Box } from "@chakra-ui/react";

const CustomStylesComponent = () => {
  return (
    <Box sx={{ "--my-color": "#53c8c4" }}>
      <Heading color="var(--my-color)" size="lg">
        This Heading uses CSS Custom Properties!
      </Heading>
    </Box>
  );
};

export default CustomStylesComponent;
