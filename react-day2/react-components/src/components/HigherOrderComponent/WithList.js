import React from "react";

const WithList = (WrappedComponent) => {
	const withLoading = ({ isLoading }) => {
		if (isLoading) {
			return <p>loading...</p>;
		} else {
			return <WrappedComponent />;
		}
	};
	return withLoading;
};
export default WithList;
