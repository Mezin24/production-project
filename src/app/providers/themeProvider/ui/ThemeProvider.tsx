import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_KEY_NAME, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_KEY_NAME) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children, initialTheme } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const value = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
