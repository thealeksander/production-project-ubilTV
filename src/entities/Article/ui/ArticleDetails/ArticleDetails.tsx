import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import {
  ReducerList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { fetchArticleById } from 'entities/Article/model/services/fetchProfileData/fetchArticleById';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails';
import { Text } from 'shared/ui/Text';
import { TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import EyeIcon from 'shared/assets/icons/eye.svg';
import ClaendarIcon from 'shared/assets/icons/calendar.svg';

import { Avatar } from 'shared/ui/Avatar';
import { Icon } from 'shared/ui/Icon';
import {
  ArticleBlock,
  ArticleBlockType,
} from 'entities/Article/model/types/article';
import { HStack, VStack } from 'shared/ui/Stack';
import styles from './ArticleDetails.module.scss';
import { ArticleCodeBlock } from '../ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock';
import { ArticleTextBlock } from '../ArticleTextBlock';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = ({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation('article-details');
  useDynamicModuleLoader({ reducers, removeAfterUnmount: true });
  const dispatch = useAppDispatch();

  const articleData = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlock key={block.id} block={block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlock key={block.id} block={block} />;
      case ArticleBlockType.TEXT:
        return <ArticleTextBlock key={block.id} block={block} />;
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={styles.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <Skeleton width={300} height={32} />
        <Skeleton width={600} height={24} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке статьи')}
      />
    );
  } else {
    content = (
      <>
        <HStack justify="center" max>
          <Avatar size={200} src={articleData?.img} className={styles.avatar} />
        </HStack>
        <VStack gap="4" max>
          <Text
            title={articleData?.title}
            text={articleData?.subtitle}
            size={TextSize.L}
          />
          <HStack gap="8">
            <Icon Svg={EyeIcon} />
            <Text text={String(articleData?.views)} />
          </HStack>
          <HStack gap="8">
            <Icon Svg={ClaendarIcon} />
            <Text text={articleData?.createdAt} />
          </HStack>
        </VStack>

        {articleData?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <VStack gap="16" className={classNames('', {}, [className])}>
      {content}
    </VStack>
  );
};
