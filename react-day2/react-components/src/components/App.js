import React, { useEffect, useState } from "react";
import ClassComponent from "./ClassComponent/ClassComponent";
import FunctionalComponent from "./FunctionalComponent/FunctionalComponent";
import Purecomponent from "./PureComponent/PureComponent";
import WithList from "./HigherOrderComponent/WithList";
import List from "./HigherOrderComponent/List";
import StatelessComponent from "./StatelessComponent/StatelessComponent";
import ContainerComponent from "./ContainerComponent/ContainerComponent";

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
			<br />
			<p>Funcional Component</p>
			<FunctionalComponent />
			<br />
			<br />
			<p>Class Component</p>
			<ClassComponent />
			<br />
			<br />
			<p>HOC</p>
			<WithListLoad isLoading={isLoading} />
			<br />
			<br />
			<p>Pure Component</p>
			<Purecomponent />
			<br />
			<br />
			<p>Stateless Component</p>
			<StatelessComponent />
			<br />
			<br />
			<p>container & presentational component</p>
			<ContainerComponent />
		</>
	);
};
