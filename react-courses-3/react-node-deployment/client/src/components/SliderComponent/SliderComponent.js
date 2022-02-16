import { UpDownIcon } from "@chakra-ui/icons";
import {
	Heading,
	Divider,
	HStack,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	Box,
} from "@chakra-ui/react";

/**
 * SliderComponent: for demonstrating
 * all features of Slider from chakra ui
 */
const SliderComponent = () => {
	return (
		<div>
			<Heading size={"lg"}>Sliders</Heading>
			<Divider />
			<br />
			<br />
			<Heading size={"md"}>Simple Slider</Heading>
			<Divider />
			<br />
			<HStack>
				<Slider defaultValue={70}>
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
					<SliderThumb />
				</Slider>
			</HStack>
			<br />
			<Heading size={"md"}>Custom Slider</Heading>
			<Divider />
			<br />
			<HStack>
				<Slider defaultValue={30}>
					<SliderTrack bg="green.100">
						<SliderFilledTrack bg="green" />
					</SliderTrack>
					<SliderThumb boxSize={6}>
						<Box color="green" as={UpDownIcon} />
					</SliderThumb>
				</Slider>
			</HStack>
		</div>
	);
};

export default SliderComponent;
