import { Heading, Divider, HStack, Button, useToast } from "@chakra-ui/react";

/**
 * ToastComponent: for demonstrating
 * all features of Toast from chakra ui
 */
const ToastComponent = () => {
	const toast = useToast();
	const toastVariants = [
		{
			title: "success toast",
			status: "success",
			description: "this is success toast",
		},
		{
			title: "error toast",
			status: "error",
			description: "this is error toast",
		},
		{
			title: "warning toast",
			status: "warning",
			description: "this is warning toast",
		},
		{
			title: "info toast",
			status: "info",
			description: "this is info toast",
		},
	];

	return (
		<div>
			<Heading size={"lg"}>Toasts</Heading>
			<Divider />
			<br />
			<br />
			<Heading size={"md"}>Simple Toast</Heading>
			<Divider />
			<br />
			<HStack>
				<Button
					onClick={() => {
						toast({
							title: "This is simple toast",
							description: "simple description",
							status: "info",
							duration: 5000,
							isClosable: true,
							position: "bottom-left",
						});
					}}
				>
					Click Me to show toast
				</Button>
				<Button
					onClick={() => {
						toast.closeAll();
					}}
				>
					Close All Toasts
				</Button>
			</HStack>
			<br />
			<Heading size={"md"}>Toast With Different Variants</Heading>
			<Divider />
			<br />
			<HStack>
				{toastVariants.map(({ title, description, status }) => (
					<Button
						key={title}
						onClick={() => {
							toast({
								title,
								description,
								status,
								duration: 5000,
								isClosable: true,
							});
						}}
					>
						{title}
					</Button>
				))}
			</HStack>
		</div>
	);
};

export default ToastComponent;
