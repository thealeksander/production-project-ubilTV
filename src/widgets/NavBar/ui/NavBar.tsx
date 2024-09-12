import { classNames } from "shared/lib/classNames"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import styles from './NavBar.module.scss'

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }: NavBarProps) => {

return (
    <div className={classNames(styles.navBar, {}, [className])}>
        <div className={styles.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={styles.mainLink}>Главная</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>О сайте</AppLink>
        </div>
    </div>
)
}
