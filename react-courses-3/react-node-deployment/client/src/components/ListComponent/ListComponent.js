import { NotAllowedIcon, TimeIcon, WarningTwoIcon } from "@chakra-ui/icons";
import {
	Box,
	Divider,
	Heading,
	List,
	ListIcon,
	ListItem,
} from "@chakra-ui/react";

/**
 * ListComponent: for demonstrating
 * all features of List from chakra ui
 */
const ListComponent = () => {
	return (
		<div>
			<Heading size={"lg"}>List Component</Heading>
			<Divider />
			<br />
			<Heading size={"md"}>Simple List</Heading>
			<Divider />
			<br />
			<Box bgColor={"green.200"} p={4} color={"green"}>
				<List spacing={3}>
					<ListItem>
						<ListIcon as={WarningTwoIcon} color="green" />
						Lorem ipsum dolor sit amet, consectetur adipisicing elit
					</ListItem>
					<Divider bg={"green"} />
					<ListItem>
						<ListIcon as={TimeIcon} color="green" />
						Assumenda, quia temporibus eveniet a libero incidunt suscipit
					</ListItem>
					<Divider bg={"green"} />
					<ListItem>
						<ListIcon as={NotAllowedIcon} color="green" />
						Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
					</ListItem>
				</List>
			</Box>
		</div>
	);
};

export default ListComponent;
