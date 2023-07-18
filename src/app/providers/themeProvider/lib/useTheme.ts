import { useContext } from 'react';
import { LOCAL_STORAGE_KEY_NAME, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  theme: Theme,
  toggle: () => void;
}

export function useTheme(): UseThemeResult {
  const { setTheme, theme } = useContext(ThemeContext);

  const toggle = () => {
    let newTheme:Theme;

    switch (theme) {
    case Theme.LIGHT:
      newTheme = Theme.DARK;
      break;
    case Theme.DARK:
      newTheme = Theme.ORANGE;
      break;
    case Theme.ORANGE:
      newTheme = Theme.LIGHT;
      break;
    default:
      newTheme = Theme.LIGHT;
      break;
    }

    localStorage.setItem(LOCAL_STORAGE_KEY_NAME, newTheme);
    setTheme?.(newTheme);
    document.body.className = newTheme;
  };
  return { theme: theme || Theme.LIGHT, toggle };
}
