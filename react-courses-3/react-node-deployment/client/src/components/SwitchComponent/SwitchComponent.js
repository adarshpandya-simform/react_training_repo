import {
	Heading,
	Divider,
	HStack,
	FormControl,
	FormLabel,
	Switch,
	Stack,
} from "@chakra-ui/react";

/**
 * SwitchComponent: for demonstrating
 * all features of Switch from chakra ui
 */
const SwitchComponent = () => {
	return (
		<div>
			<Heading size={"lg"}>Switch</Heading>
			<Divider />
			<br />
			<br />
			<Heading size={"md"}>Simple Switch</Heading>
			<Divider />
			<br />
			<HStack>
				<FormControl display="flex" alignItems="center">
					<FormLabel htmlFor="email-alerts" mb="0">
						Enable Notification Alert For Youtube?
					</FormLabel>
					<Switch id="email-alerts" />
				</FormControl>
			</HStack>
			<br />
			<Heading size={"md"}>Customized Switch (different variants)</Heading>
			<Divider />
			<br />
			<HStack>
				<Stack align="center" direction="row">
					<Switch colorScheme={"facebook"} size="sm" />
					<Switch colorScheme={"twitter"} size="md" />
					<Switch colorScheme={"whatsapp"} size="lg" />
				</Stack>
			</HStack>
		</div>
	);
};

export default SwitchComponent;
