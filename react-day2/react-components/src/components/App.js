import React from "react";
import ClassComponent from "./ClassComponent/ClassComponent";
import FunctionalComponent from "./FunctionalComponent/FunctionalComponent";
import Purecomponent from "./PureComponent/PureComponent";
// import styles from "./App.module.css";

export const App = () => {
	return (
		<>
			<h4>four ways of creating components</h4>
			<p>Funcional Component</p>
			<FunctionalComponent />
			<p>Class Component</p>
			<ClassComponent />
			<p>HOC</p>
			<p>Pure Component</p>
			<Purecomponent />
		</>
	);
};
