import React, { useState, useEffect, useMemo } from 'react';
import { ThemeContext, Theme, LOKAL_STARAGE_THEME_KEY } from '../lib/ThemeContext';

interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem(LOKAL_STARAGE_THEME_KEY, newTheme);
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem(LOKAL_STARAGE_THEME_KEY);
    if (storedTheme && storedTheme in Theme) {
      setTheme(storedTheme as Theme);
    }
  }, []);

  const defaultProps = useMemo(() => ({ theme, setTheme: handleSetTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
