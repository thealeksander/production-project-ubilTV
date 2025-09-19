import { useCallback, useMemo } from 'react';
import { TabItem, Tabs } from 'shared/ui/Tabs';
import { ArticleType } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
  const { t } = useTranslation();

  const { className, value, onChangeType } = props;

  const typeTabs = useMemo<TabItem[]>(
    () => [
      {
        value: ArticleType.All,
        content: t('Все статьи'),
      },
      {
        value: ArticleType.IT,
        content: t('Айти'),
      },
      {
        value: ArticleType.ECONOMICS,
        content: t('Экономика'),
      },
      {
        value: ArticleType.SCIENCE,
        content: t('Наука'),
      },
    ],
    [t],
  );

  const onTabClick = useCallback(
    (type: TabItem) => {
      onChangeType(type.value as ArticleType);
    },
    [onChangeType],
  );

  return (
    <Tabs
      value={value}
      tabs={typeTabs}
      onTabClick={onTabClick}
      className={classNames('', {}, [className])}
    />
  );
};
