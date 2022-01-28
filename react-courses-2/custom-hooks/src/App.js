import React from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import { useDate } from "./hooks/useDate";
import { useTime } from "./hooks/useTime";

// App component
const App = () => {
  // using useDate hook to extract current
  // date in dd-mm-yy with '-' separator
  const { date } = useDate("dd-mm-yy", "-");
  // using useDate hook to extract current
  // date in dd-mom-yyyy with ' ' separator
  const { date: date2 } = useDate("dd-mon-yyyy", " ");
  // getting current time with useTime hook
  const { time } = useTime();

  return (
    <div>
      <p>time : {time}</p>
      <p>Today's Date : {date}</p>
      <p>Today's Date : {date2}</p>
      {/* rendering components */}
      <Users />
      <AddUser />
    </div>
  );
};

export default App;
