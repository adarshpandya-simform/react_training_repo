import { LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
	Divider,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Stack,
} from "@chakra-ui/react";
import { useState } from "react";

/**
 * InputComponent: for demonstrating
 * all features of Input from chakra ui
 */
const InputComponent = () => {
	const [viewPassword, setViewPassword] = useState(false);

	return (
		<div>
			<Heading size={"lg"}>Input Component</Heading>
			<Divider />
			<br />
			<Heading size={"md"}>Simple Input</Heading>
			<Divider />
			<br />
			<Stack spacing={3}>
				<Input placeholder="extra small size" size="xs" />
				<Input placeholder="small size" size="sm" />
				<Input placeholder="medium size" size="md" />
				<Input placeholder="large size" size="lg" />
			</Stack>
			<br />
			<Heading size={"md"}>Input With Icons</Heading>
			<Divider />
			<br />
			<Stack spacing={3}>
				<InputGroup>
					<InputLeftElement pointerEvents={"none"} children={<LockIcon />} />
					<Input placeholder="Enter Password" size="md" type={"text"} />
				</InputGroup>
				<InputGroup>
					<InputLeftElement pointerEvents={"none"} children={<LockIcon />} />
					<Input
						placeholder="Enter Password"
						size="md"
						type={viewPassword ? "text" : "password"}
					/>
					<InputRightElement
						onClick={() => {
							setViewPassword((prevState) => !prevState);
						}}
						pointerEvents="visible"
						children={viewPassword ? <ViewIcon /> : <ViewOffIcon />}
					/>
				</InputGroup>
			</Stack>
			<br />
			<Heading size={"md"}>Input With Error</Heading>
			<Divider />
			<br />
			<Stack>
				<Input
					placeholder="Enter Username"
					isInvalid
					errorBorderColor="red.500"
				/>
			</Stack>
		</div>
	);
};

export default InputComponent;
