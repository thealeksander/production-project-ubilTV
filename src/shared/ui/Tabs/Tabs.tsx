import { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Tabs.module.scss';
import { Card } from '../Card';
import { CardTheme } from '../Card/Card';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, onTabClick, value } = props;

  const clickHandle = useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  return (
    <div className={classNames(styles.tabs, {}, [className])}>
      {tabs.map(tab => (
        <Card
          onClick={clickHandle(tab)}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLANED}
          className={styles.tab}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
