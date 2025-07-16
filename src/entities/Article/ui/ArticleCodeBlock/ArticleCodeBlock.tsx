import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { memo } from 'react';
import { ArticleCodeBlockType } from 'entities/Article/model/types/article';
import { Code } from 'shared/ui/Code';
import styles from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
  className?: string;
  block: ArticleCodeBlockType;
}

export const ArticleCodeBlock = memo(
  ({ className, block }: ArticleCodeBlockProps) => {
    const { t } = useTranslation();

    return (
      <div className={classNames(styles.articleCodeBlock, {}, [className])}>
        <Code text={block.code} />
      </div>
    );
  },
);
