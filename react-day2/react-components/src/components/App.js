import React, { useState } from "react";
// import styles from "./App.module.css";

export const App = () => {
	const [counter, setCounter] = useState(0);

	return (
		<>
			<h1
				// className={styles.h1}
				onClick={() => {
					setCounter((prevCount) => prevCount + 1);
				}}
			>
				count : {counter}
			</h1>
			<p>sample svg</p>
			{/* <img src={logo} alt="logo" /> */}
		</>
	);
};
