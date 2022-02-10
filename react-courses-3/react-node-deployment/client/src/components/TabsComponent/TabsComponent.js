import {
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Box,
  Text,
} from "@chakra-ui/react";

// TabsComponent for rendering Tab styled layout
const TabsComponent = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box bgColor={"gray.100"} p={5}>
            <Text color={"blackAlpha.700"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box bgColor={"red.200"} p={5}>
            <Text color={"red.700"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabsComponent;
