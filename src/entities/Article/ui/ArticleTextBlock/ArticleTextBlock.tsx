import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { memo } from 'react';
import { ArticleTextBlockType } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text';
import styles from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
  className?: string;
  block: ArticleTextBlockType;
}

export const ArticleTextBlock = memo((props: ArticleTextBlockProps) => {
  const { t } = useTranslation();
  const { className, block } = props;

  return (
    <div className={classNames(styles.articleTextBlock, {}, [className])}>
      {block.title && <Text title={block.title} className={styles.title} />}
      {block.paragraphs.map(paragraph => (
        <Text title={paragraph} key={paragraph} className={styles.paragraph} />
      ))}
    </div>
  );
});
