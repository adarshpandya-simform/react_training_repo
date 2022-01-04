// import logo from "../assets/logo.svg";
// import styles from "./App.module.css";
import React, { useState } from "react";

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
