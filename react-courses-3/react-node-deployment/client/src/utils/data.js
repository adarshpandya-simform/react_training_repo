import {
	AspectRatioComponent,
	BoxComponent,
	ButtonComponent,
	CenterComponent,
	CheckboxComponent,
	CustomizedComponent,
	CustomStylesComponent,
	DarkModeButton,
	DarkModeComponent,
	FlexComponent,
	ForcedModeComponents,
	FormControlComponent,
	GridComponent,
	IconsComponent,
	InputComponent,
	KbdComponent,
	ListComponent,
	MenuComponent,
	PinInputComponent,
	RadioButtonsComponent,
	SliderComponent,
	StackComponent,
	SwitchComponent,
	TabsComponent,
	ToastComponent,
} from "../components";

// creating and exporting an array which contains
// path,name and core component for routes and links
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
	{
		path: "/button-component",
		name: "Button Component",
		component: <ButtonComponent />,
	},
	{
		path: "/checkbox-component",
		name: "Checkbox Component",
		component: <CheckboxComponent />,
	},
	{
		path: "/input-component",
		name: "Input Component",
		component: <InputComponent />,
	},
	{
		path: "/pin-input-component",
		name: "PinInput Component",
		component: <PinInputComponent />,
	},
	{
		path: "/form-control-component",
		name: "FormControl Component",
		component: <FormControlComponent />,
	},
	{
		path: "/radio-button-component",
		name: "Radio Button Component",
		component: <RadioButtonsComponent />,
	},
	{
		path: "/slider-component",
		name: "Slider Component",
		component: <SliderComponent />,
	},
	{
		path: "/switch-component",
		name: "Switch Component",
		component: <SwitchComponent />,
	},
	{
		path: "/kbd-component",
		name: "Kbd Component",
		component: <KbdComponent />,
	},
	{
		path: "/list-component",
		name: "List Component",
		component: <ListComponent />,
	},
	{
		path: "/toast-component",
		name: "Toast Component",
		component: <ToastComponent />,
	},
];
