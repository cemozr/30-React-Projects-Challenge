import { useState } from "react";

export const ProjectFour = () => {
  const [situation, setSituation] = useState<boolean>(false);
  return (
    <div>
      <input
        type="checkbox"
        style={{ width: "2rem", height: "2rem" }}
        onChange={(e) => setSituation(e.currentTarget.checked)}
      />
      <h1>{situation ? "On" : "Off"}</h1>
    </div>
  );
};
