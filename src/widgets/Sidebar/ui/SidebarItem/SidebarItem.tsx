import { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import styles from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/types/sidebar';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      className={classNames(styles.itemLink, {
        [styles.collapsed]: collapsed,
      })}
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
    >
      <item.Icon className={styles.icon} />
      <span className={styles.link}>{t(item.text)}</span>
    </AppLink>
  );
});
