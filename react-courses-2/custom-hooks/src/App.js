import React from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import { useDate } from "./hooks/useDate";
import { useTime } from "./hooks/useTime";

const App = () => {
  const { date } = useDate("dd-mm-yy", "-");
  const { date: date2 } = useDate("dd-mon-yyyy", " ");
  const { time } = useTime();
  return (
    <div>
      <p>time : {time}</p>
      <p>Today's Date : {date}</p>
      <p>Today's Date : {date2}</p>
      <Users />
      <AddUser />
    </div>
  );
};

export default App;
