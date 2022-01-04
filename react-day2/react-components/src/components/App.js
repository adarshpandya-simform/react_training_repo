import React, { useEffect, useState } from "react";
import ClassComponent from "./ClassComponent/ClassComponent";
import FunctionalComponent from "./FunctionalComponent/FunctionalComponent";
import Purecomponent from "./PureComponent/PureComponent";
import WithList from "./HigherOrderComponent/WithList";
import List from "./HigherOrderComponent/List";
import StatelessComponent from "./StatelessComponent/StatelessComponent";

const WithListLoad = WithList(List);

export const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, []);

	return (
		<>
			<h4>four ways of creating components</h4>
			<p>Funcional Component</p>
			<FunctionalComponent />
			<p>Class Component</p>
			<ClassComponent />
			<p>HOC</p>
			<WithListLoad isLoading={isLoading} />
			<p>Pure Component</p>
			<Purecomponent />
			<p>Stateless Component</p>
			<StatelessComponent />
		</>
	);
};
