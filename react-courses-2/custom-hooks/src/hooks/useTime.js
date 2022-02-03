import { useEffect, useState } from "react";

// custom hook for showing current time
export const useTime = () => {
  const [time, setTime] = useState(new Date());

  // useEffect for time update every second
  useEffect(() => {
    let timeId = setInterval(() => setTime(new Date()), 1000);
    // clean-up
    return () => {
      clearInterval(timeId);
    };
  });

  // returning time in readable format
  return { time: time.toLocaleTimeString() };
};
