// custom hook for showing current time

import { useEffect, useState } from "react";

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

  return { time: time.toLocaleTimeString() };
};
