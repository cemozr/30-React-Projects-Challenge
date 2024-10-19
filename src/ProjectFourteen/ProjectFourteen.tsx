import { useState } from "react";

export const ProjectFourteen = () => {
  const [selectedColor, setSelectedColor] = useState<string>("#F41515");
  return (
    <div>
      <input
        type="color"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.currentTarget.value)}
      />
      <div
        style={{
          backgroundColor: selectedColor,
          margin: "1rem",
          width: "10rem",
          height: "10rem",
          borderRadius: "1rem",
        }}
      ></div>
    </div>
  );
};
