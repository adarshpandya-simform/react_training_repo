import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircularProgress } from "@mui/material";

// TableData component for showing data of loaded users with loading state
export default function TableData({ data, loading }) {
	return (
		<>
			{/* condition check for loading state */}
			{loading && <CircularProgress />}
			{/* render data if not loading */}
			{!loading && (
				<TableContainer sx={{ maxHeight: 500 }} component={Paper}>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Id</TableCell>
								<TableCell align="left">Name</TableCell>
							</TableRow>
						</TableHead>
						{/* Mapping Users */}
						<TableBody>
							{data.map((user) => (
								<TableRow
									key={user._id}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell component="th" scope="row">
										{user.userId}
									</TableCell>
									<TableCell align="left">{user.userName}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</>
	);
}
