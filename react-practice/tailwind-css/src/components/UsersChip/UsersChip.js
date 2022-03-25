// UsersChip component: takes users as props, maps though them and displays chips
const UsersChip = ({ users }) => {
	return (
		<div className="mt-3 flex -space-x-2 overflow-hidden">
			{/* conditional rendering */}
			{users.length > 0 &&
				users.map(({ profile }) => (
					<img
						key={profile}
						className="inline-block transition-all hover:z-10 h-12 w-12 rounded-full ring-2 ring-white"
						src={profile}
						alt={`url-${profile}`}
					/>
				))}
		</div>
	);
};

export default UsersChip;
