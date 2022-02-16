import { useMemo, useState } from "react";
import ColoredDiv from "./components/ColoredDiv";

// App component with 2 states
const App = () => {
	const [renderedCount, setRenderedCount] = useState(0);
	const [color, setColor] = useState("red");

	// logging render count
	console.log(`App rendered ${renderedCount} times`);

	// memoizing color for object compare by ref problem
	const memoizedColor = useMemo(() => ({ color }), [color]);

	/**
	 * explanation : suppose if we pass color without memoizing it
	 * it will be passed like <ColoredDiv background={{color}}/>
	 * so when every time re render happes the {color} object will
	 * be created with new reference which react doesn't know
	 * there for we're memozing it and passing it in prop. which says
	 * only trigger re-render when color is truly changed and not the object ref
	 */

	return (
		<div>
			{/* attaching onClick handler to trigger re render */}
			<button onClick={() => setRenderedCount((prevCount) => prevCount + 1)}>
				render app
			</button>
			{/* attaching onClick handler to trigger re render */}
			<button
				onClick={() =>
					setColor((prevColor) => (prevColor === "red" ? "blue" : "red"))
				}
			>
				change color
			</button>
			<br />
			{/* rendering ColoredDiv with memoizedColor as prop */}
			<ColoredDiv background={memoizedColor} />
		</div>
	);
};

export default App;
