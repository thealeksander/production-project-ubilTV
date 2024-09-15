import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import styles from './NavBar.module.scss'

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t, i18n } = useTranslation();

    return (
        <div className={classNames(styles.navBar, {}, [className])}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={styles.mainLink}>{t("Раздел главная")}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>{t("Раздел о сайте")}</AppLink>
            </div>
        </div>
    )
}
