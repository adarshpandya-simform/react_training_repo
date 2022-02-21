import { Buttons, Dropdown, Header, List, UsersChip } from "./components";

const users = [
	{
		profile:
			"https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		profile:
			"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		profile:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
	},
	{
		profile:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		profile:
			"https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
];

const App = () => {
	return (
		<div>
			<p className="underline text-gray-800">Buttons</p>
			<Buttons />
			<br />
			<p className="underline text-gray-800">Chips</p>
			<UsersChip users={users} />
			<br />
			<p className="underline text-gray-800">Header</p>
			<Header />
			<br />
			<p className="underline text-gray-800">Menu Dropdown</p>
			<Dropdown />
			<br />
			<br />
			<p className="underline text-gray-800">List</p>
			<List />
			<br />
		</div>
	);
};

export default App;
