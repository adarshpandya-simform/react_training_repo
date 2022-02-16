import { memo } from "react";
import "./ColoredDiv.css";

// ColoredDiv component (which was
// initially getting re - rendered
// even when color was not changed
// in App component)
const ColoredDiv = ({ background }) => {
	// logging renders for reference
	console.log(`colored div rendered`);
	return (
		<div className="container" style={{ background: background.color }}></div>
	);
};

// memoizing and exporting the component
export default memo(ColoredDiv);
