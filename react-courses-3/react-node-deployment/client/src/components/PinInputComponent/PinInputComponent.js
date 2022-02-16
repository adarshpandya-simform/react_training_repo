import {
	HStack,
	Divider,
	Heading,
	PinInput,
	PinInputField,
} from "@chakra-ui/react";

/**
 * PinInputComponent: for demonstrating
 * all features of PinInput from chakra ui
 */
const PinInputComponent = () => {
	return (
		<div>
			<Heading size={"lg"}>Pin Input</Heading>
			<Divider />
			<br />
			<Heading size={"md"}>Pin Input (sample)</Heading>
			<Divider />
			<br />
			<HStack>
				<PinInput placeholder="0">
					<PinInputField />
					<PinInputField />
					<PinInputField />
					<PinInputField />
				</PinInput>
			</HStack>
			<br />
			<Heading size={"md"}>Pin Input (alphanumeric)</Heading>
			<Divider />
			<br />
			<HStack>
				<PinInput type="alphanumeric">
					<PinInputField />
					<PinInputField />
					<PinInputField />
					<PinInputField />
				</PinInput>
			</HStack>
			<br />
			<Heading size={"md"}>Pin Input (masked)</Heading>
			<Divider />
			<br />
			<HStack>
				<PinInput mask>
					<PinInputField />
					<PinInputField />
					<PinInputField />
					<PinInputField />
				</PinInput>
			</HStack>
		</div>
	);
};

export default PinInputComponent;
