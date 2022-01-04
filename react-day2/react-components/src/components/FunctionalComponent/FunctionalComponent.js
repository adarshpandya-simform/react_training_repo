import React, { useState } from "react";

const FunctionalComponent = () => {
	const [counter, setCounter] = useState(0);

	const increaseCount = () => {
		setCounter((counter) => counter + 1);
	};

	const decreaseCount = () => {
		setCounter((counter) => counter - 1);
	};

	return (
		<div>
			<button onClick={increaseCount}>+</button>
			<span>{counter}</span>
			<button onClick={decreaseCount}>-</button>
		</div>
	);
};

export default FunctionalComponent;
