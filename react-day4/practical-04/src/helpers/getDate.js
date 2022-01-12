//  a helper function for getting current date (forms closure)
export const getDate = (() => {
	const monthNames = [
		"JAN",
		"FEB",
		"MAR",
		"APR",
		"MAY",
		"JUN",
		"JUL",
		"AUG",
		"SEP",
		"OCT",
		"NOV",
		"DEC",
	];
	return () => {
		const dateObj = new Date();
		const month = monthNames[dateObj.getMonth()];
		const day = String(dateObj.getDate()).padStart(2, "0");
		const year = dateObj.getFullYear();
		return { month, day, year };
	};
})();
