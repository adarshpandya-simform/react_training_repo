import {
	Button,
	Divider,
	FormControl,
	FormHelperText,
	FormLabel,
	Heading,
	HStack,
	Input,
	Select,
} from "@chakra-ui/react";

/**
 * FormControlComponent: for demonstrating
 * all features of FormControl from chakra ui
 */
const FormControlComponent = () => {
	return (
		<div>
			<Heading size={"lg"}>Form Control</Heading>
			<Divider />
			<br />
			<Heading size={"md"}>Simple Form</Heading>
			<Divider />
			<br />
			<HStack>
				<FormControl>
					<FormLabel htmlFor="email">Feedback</FormLabel>
					<Input type="text" placeholder="Enter Your Feedback" />
					<FormHelperText>
						Share Your Feedback, we'd love to hear from you.
					</FormHelperText>
				</FormControl>
			</HStack>
			<br />
			<Heading size={"md"}>Form With Select</Heading>
			<Divider />
			<br />
			<HStack>
				<FormControl>
					<FormLabel>Country</FormLabel>
					<Select placeholder="Select Your Country">
						<option>India</option>
						<option>Shri Lanka</option>
						<option>USA</option>
						<option>China</option>
					</Select>
					<br />
					<FormLabel htmlFor="email">Feedback</FormLabel>
					<Input type="text" placeholder="Enter Your Feedback" />
					<br />
					<br />
					<Button width={"100%"} colorScheme={"blue"}>
						Submit
					</Button>
				</FormControl>
			</HStack>
		</div>
	);
};

export default FormControlComponent;
