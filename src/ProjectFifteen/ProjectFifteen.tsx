import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const ProjectFifteen = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div>
      <h1>Check The Box To Switch Theme</h1>
      <input
        type="checkbox"
        className="theme-checkbox"
        onChange={themeContext.toggleTheme}
      />
      <p className={`theme-text ${themeContext.currentTheme}`}>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        harum?{" "}
      </p>
    </div>
  );
};
