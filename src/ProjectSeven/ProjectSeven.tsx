import { useState } from "react";
import "../styles.scss";
export const ProjectSeven = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div
      style={{
        backgroundColor: clicked ? "#792686" : "#20293a",
        width: "80rem",
        height: "30rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "1rem",
      }}
    >
      <button onClick={() => setClicked(!clicked)}>
        Click me to change bg color!
      </button>
    </div>
  );
};
