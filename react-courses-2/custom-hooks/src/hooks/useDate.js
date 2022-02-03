//  a helper custom hook for getting current date (forms closure)
export const useDate = (() => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (format, separator) => {
    // getting date object
    const dateObj = new Date();
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, "0");
    const year = dateObj.getFullYear();
    // formating it using format and separator
    let askedDate = "";
    if (format === undefined || separator === undefined) {
      throw new Error("please pass the date format and separator");
    }
    if (format === "dd-mm-yy") {
      askedDate = `${day}${separator}${
        String(dateObj.getMonth()).length === 1 && "0"
      }${dateObj.getMonth() + 1}${separator}${String(year).slice(-2)}`;
    }
    if (format === "dd-mon-yyyy") {
      askedDate = `${day}${separator}${month.slice(0, 3)}${separator}${year}`;
    }
    // returning date
    return { date: askedDate };
  };
})();
