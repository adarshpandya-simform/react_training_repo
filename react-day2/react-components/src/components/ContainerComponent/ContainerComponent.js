import React, { useEffect, useState } from "react";
import PresentationalComponent from "../PresentationalComponent/PresentationalComponent";

const ContainerComponent = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		// assume this is coming from API call
		setData((prevData) => [...prevData, "item1", "item2", "item3"]);
	}, []);

	return (
		<div style={{ border: "1px solid gray", padding: "20px" }}>
			<div style={{ border: "1px solid blue" }}>
				{data.map((item) => (
					<PresentationalComponent key={item} title={item} />
				))}
			</div>
		</div>
	);
};

export default ContainerComponent;
