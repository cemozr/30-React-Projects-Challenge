import { useState } from "react";

export const ProjectTwo = () => {
  const [txt, setTxt] = useState<string>("");
  return (
    <div>
      <input
        value={txt}
        onChange={(e) => setTxt(e.currentTarget.value)}
        type="text"
      />
      <h2>{txt}</h2>
    </div>
  );
};
