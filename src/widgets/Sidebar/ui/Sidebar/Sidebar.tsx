import { FC, memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button';
import { ButtonSize } from 'shared/ui/Button/Button';

import { SidebarItemList } from 'widgets/Sidebar/model/item';
import styles from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

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
        {SidebarItemList.map(item => (
          <SidebarItem key={item.path} collapsed={collapsed} item={item} />
        ))}
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher shortLng={collapsed} className={styles.lang} />
      </div>
    </div>
  );
});
