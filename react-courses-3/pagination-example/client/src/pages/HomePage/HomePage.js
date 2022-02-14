import Pages from "../../components/Pages";
import TableData from "../../components/TableData";

// HomePage component: renders-> table and pagination
const HomePage = ({ data, setData, setLoading, loading }) => {
	return (
		<>
			<div className="table">
				{/* Passing data and loading props */}
				<TableData data={data} loading={loading} />
			</div>
			<div className="page">
				{/* Passing setData and setLoading props */}
				<Pages setData={setData} setLoading={setLoading} />
			</div>
		</>
	);
};

export default HomePage;
