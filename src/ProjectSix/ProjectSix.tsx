import { useState, useEffect } from "react";

export const ProjectSix = () => {
  const [time, setTime] = useState<number>(60);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  return (
    <div>
      <h1>{time}</h1> <span>{time > 0 ? "Seconds Left" : "Timeout"}</span>
    </div>
  );
};
