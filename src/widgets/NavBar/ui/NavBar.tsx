import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export function NavBar({ className }: NavBarProps) {
  const { t, i18n } = useTranslation();

  return (
    <div className={classNames(styles.navBar, {}, [className])}>
      <div className={styles.links}>/</div>
    </div>
  );
}
