import { Center, Grid, GridItem, Text } from "@chakra-ui/react";

/**
 * Grid component: for rendering a full
 * layout with header, footer and other
 * sections without manually using flex or grid
 */
const GridComponent = () => {
  return (
    <Grid
      h="500px"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={1} bg="bisque">
        <Center h="full">
          <Text>Menu</Text>
        </Center>
      </GridItem>
      <GridItem colSpan={4} bg="lightcoral">
        <Center h="full">
          <Text>Header</Text>
        </Center>
      </GridItem>
      <GridItem colSpan={3} bg="lightgreen">
        <Center h="full">
          <Text>Content</Text>
        </Center>
      </GridItem>
      <GridItem colSpan={1} bg="lightblue">
        <Center h="full">
          <Text>Ads</Text>
        </Center>
      </GridItem>
      <GridItem colSpan={5} bg="lightgray">
        <Center h="full">
          <Text>Footer</Text>
        </Center>
      </GridItem>
    </Grid>
  );
};

export default GridComponent;
