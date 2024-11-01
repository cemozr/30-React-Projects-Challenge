import { useState, createContext } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};
type ThemeContextType = {
  currentTheme: string;
  toggleTheme: () => void;
};
const ThemeContext = createContext<ThemeContextType>({
  currentTheme: "light",
  toggleTheme: () => {},
});

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<string>("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContextProvider, ThemeContext };
