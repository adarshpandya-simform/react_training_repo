import React from "react";

export default function WithList (WrappedComponent) {
	return function withLoading({ isLoading }) {
		if (isLoading)
		{
			return <p>loading...</p>;
		} else {
			return <WrappedComponent />;
		}
	};
}
