import { Pagination, PaginationItem } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

let memoizedData = {};

// Pages component for showing pagination
const Pages = ({ setData, setLoading }) => {
	// extracting params from useSearchParams()
	const [params] = useSearchParams();
	// accessing the page
	const page = +params.get("page") || 1;
	const navigate = useNavigate();
	// setting total pages
	const [totalPages, setTotalPages] = useState(5);

	// effects

	useEffect(() => {
		if (params.get("page") === null) {
			navigate("/users?page=1");
		}
	}, [navigate, params]);

	useEffect(() => {
		(async () => {
			setLoading(true);
			// requesting and memoizind data if not already memoized
			if (memoizedData[page] === undefined || memoizedData[page] === null) {
				await axios
					.get(`http://localhost:2000/api/users?page=${page}`)
					.then((res) => {
						if (res.data.success) {
							setData(res.data.results.users);
							setTotalPages(+res.data.results.totalPages);
							// setting memoizedData
							memoizedData[page] = res.data.results.users;
						}
					});
			} else {
				// using memoized data if it's stored
				setData(memoizedData[page]);
			}

			setLoading(false);
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page]);

	return (
		// rendering pagination component with total pages
		<Pagination
			count={totalPages}
			page={page}
			color="primary"
			renderItem={(item) => (
				<PaginationItem
					{...item}
					component={Link}
					to={`/users?page=${item.page}`}
				/>
			)}
		/>
	);
};

export default Pages;
