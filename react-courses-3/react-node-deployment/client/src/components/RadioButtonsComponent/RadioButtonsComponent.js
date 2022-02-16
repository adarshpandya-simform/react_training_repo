import {
	Heading,
	Divider,
	HStack,
	RadioGroup,
	Stack,
	Radio,
} from "@chakra-ui/react";
import { useState } from "react";

/**
 * RadioButtonsComponent: for demonstrating
 * all features of Radio from chakra ui
 */
const RadioButtonsComponent = () => {
	const [radioGroup1, setRadioGroup1] = useState(1);

	return (
		<div>
			<Heading size={"lg"}>Radio Buttons</Heading>
			<Divider />
			<br />
			<Heading size={"md"}>Simple Radio Button</Heading>
			<Divider />
			<br />
			<HStack>
				<RadioGroup onChange={setRadioGroup1} value={radioGroup1}>
					<Stack direction="row">
						<Radio value="1">First</Radio>
						<Radio value="2">Second</Radio>
						<Radio value="3">Third</Radio>
					</Stack>
				</RadioGroup>
			</HStack>
			<br />
			<Heading size={"md"}>Radio Buttons With Custom Colors</Heading>
			<Divider />
			<br />
			<HStack>
				<RadioGroup defaultValue="2">
					<Stack spacing={5} direction="row">
						<Radio colorScheme="twitter" value="1">
							Twitter
						</Radio>
						<Radio colorScheme="whatsapp" value="2">
							WhatsApp
						</Radio>
					</Stack>
				</RadioGroup>
			</HStack>
		</div>
	);
};

export default RadioButtonsComponent;
