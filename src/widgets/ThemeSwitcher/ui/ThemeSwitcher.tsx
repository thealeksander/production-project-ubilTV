import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import MilkIcon from 'shared/assets/icons/theme-milk.svg';

import { Button, ThemeButton } from 'shared/ui/Button';

interface ThemeSwitcherProps {
  className?: string;
}

const SwitchIcon = memo(({ themeIcon }: { themeIcon: Theme }) => {
  switch (themeIcon) {
    case Theme.DARK:
      return <DarkIcon />;
    case Theme.LIGHT:
      return <LightIcon />;
    case Theme.GREEN:
      return <MilkIcon />;
    default:
      return <DarkIcon />;
  }
});

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
    >
      <SwitchIcon themeIcon={theme} />
    </Button>
  );
});
