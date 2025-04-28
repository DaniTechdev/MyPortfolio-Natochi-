//
// contexts/ThemeContext.js
import React, { createContext, useState, useEffect, useContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize theme state from what was already set in _document.js
  const [theme, setTheme] = useState("dark"); // Default value will be quickly updated

  useEffect(() => {
    // Read the current theme attribute that was set by the script
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Optional custom hook
export const useTheme = () => useContext(ThemeContext);
