// a helper function to get current day
export const getDayName = () => {
	var date = new Date();
	return date.toLocaleDateString("EN-US", { weekday: "long" });
};
