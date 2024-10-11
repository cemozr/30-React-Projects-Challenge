import "../styles.scss";
import { useState } from "react";

export const ProjectOne = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
};
