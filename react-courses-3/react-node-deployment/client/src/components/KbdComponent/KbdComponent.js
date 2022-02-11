import { Heading, Divider, VStack, Kbd } from "@chakra-ui/react";

/**
 * KbdComponent: for demonstrating
 * all features of Kbd from chakra ui
 */
const KbdComponent = () => {
	return (
		<div>
			<Heading size={"lg"}>Kbd Component</Heading>
			<Divider />
			<br />
			<br />
			<Heading size={"md"}>Keyboards Shortcuts</Heading>
			<Divider />
			<br />
			<VStack align={"start"}>
				<span>
					copy command:
					<Kbd>control</Kbd>+<Kbd>c</Kbd>
				</span>
				<span>
					cut command:
					<Kbd>control</Kbd>+<Kbd>x</Kbd>
				</span>
				<span>
					select all command:
					<Kbd>control</Kbd>+<Kbd>a</Kbd>
				</span>
			</VStack>
		</div>
	);
};

export default KbdComponent;
