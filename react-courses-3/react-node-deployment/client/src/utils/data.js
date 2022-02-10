import {
  AspectRatioComponent,
  BoxComponent,
  CenterComponent,
  CustomizedComponent,
  CustomStylesComponent,
  DarkModeButton,
  DarkModeComponent,
  FlexComponent,
  ForcedModeComponents,
  GridComponent,
  IconsComponent,
  MenuComponent,
  StackComponent,
  TabsComponent,
} from "../components";

export const links = [
  { path: "/", name: "Box", component: <BoxComponent /> },
  { path: "/dark-mode", name: "Dark Mode", component: <DarkModeButton /> },
  {
    path: "/dark-mode-component",
    name: "Component Reacting to dark mode",
    component: <DarkModeComponent />,
  },
  {
    path: "/forced-mode-components",
    name: "Component With forced modes",
    component: <ForcedModeComponents />,
  },
  {
    path: "/custom-styled-components",
    name: "Custom Styled components",
    component: <CustomStylesComponent />,
  },
  {
    path: "/customized-component",
    name: "Custom Style Override Component",
    component: <CustomizedComponent />,
  },
  {
    path: "/tabs-component",
    name: "Tabs Layout",
    component: <TabsComponent />,
  },
  {
    path: "/menu-component",
    name: "Menu with items",
    component: <MenuComponent />,
  },
  {
    path: "/aspect-ration",
    name: "Aspect Ratio",
    component: <AspectRatioComponent />,
  },
  {
    path: "/icon-buttons",
    name: "Icon Buttons",
    component: <IconsComponent />,
  },
  {
    path: "/center-component",
    name: "Center Component",
    component: <CenterComponent />,
  },
  {
    path: "/flex-component",
    name: "Flex Component",
    component: <FlexComponent />,
  },
  {
    path: "/grid-component",
    name: "Grid Component",
    component: <GridComponent />,
  },
  {
    path: "/stack-component",
    name: "Stack Component",
    component: <StackComponent />,
  },
];
