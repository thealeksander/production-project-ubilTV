import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import styles from './ThemeSwitcher.module.scss'
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button';


interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button theme={ThemeButton.CLEAR} onClick={toggleTheme} className={classNames(styles.themeSwitcher, {}, [className])}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}