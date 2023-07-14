import { classNames } from 'shared/lib/classNames/classNames';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import LightTheme from 'shared/assets/icons/theme-light.svg';
import { useTheme } from 'app/providers/themeProvider';
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { memo } from 'react';

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggle } = useTheme();
  return (
    <Button theme={ButtonTheme.CLEAR} onClick={toggle} className={classNames('', {}, [className])}>
      {theme === Theme.LIGHT ? <LightTheme /> : <DarkTheme />}
    </Button>
  );
});
