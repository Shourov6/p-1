import React, { createContext, useContext, useState } from "react";

interface ThemeContextType {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  setIsDark: () => {},
  toggle: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(true);
  const toggle = () => setIsDark((v) => !v);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
