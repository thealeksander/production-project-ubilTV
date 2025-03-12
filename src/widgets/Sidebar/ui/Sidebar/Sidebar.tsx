import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button';
import { ButtonSize } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/homeIcon.svg';
import ListIcon from 'shared/assets/icons/listIcon.svg';

import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t, i18n } = useTranslation();

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
        className={styles.collapsedBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.linkItems}>
        <AppLink
          className={styles.itemLink}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.MAIN}
        >
          <HomeIcon className={styles.icon} />
          <span className={styles.namePage}>{t('Раздел главная')}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={styles.itemLink}
          to={RoutePath.ABOUT}
        >
          <ListIcon className={styles.icon} />
          <span className={styles.namePage}>{t('Раздел о сайте')}</span>
        </AppLink>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher shortLng={collapsed} className={styles.lang} />
      </div>
    </div>
  );
};
