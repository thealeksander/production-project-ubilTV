import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { memo } from 'react';
import { ArticleImagBlockType } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text';
import { TextAlign } from 'shared/ui/Text/Text';
import styles from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
  className?: string;
  block: ArticleImagBlockType;
}

export const ArticleImageBlock = memo(
  ({ className, block }: ArticleImageBlockProps) => {
    const { t } = useTranslation();

    return (
      <div className={classNames(styles.articleImageBlock, {}, [className])}>
        <img
          src={block.src}
          className={styles.img}
          alt={block?.title ?? 'Картинка'}
        />
        {block.title && <Text title={block.title} align={TextAlign.CENTER} />}
      </div>
    );
  },
);
