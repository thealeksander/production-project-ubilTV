import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text';
import { CommentList, CommentType } from 'entities/Comment';
import {
  ReducerList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AddCommentFormLazy } from 'features/addCommentForm';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import styles from './ArticleDetailsPage.module.scss';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../model/slices/articleDetailsCommentsSlice';
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from '../model/selectors/comments';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/services/addCommentForArticle';

interface ArticleDetailsPageProps {
  className?: string;
}

const mockComments: CommentType[] = [
  {
    id: '1',
    text: 'comment 1',
    user: {
      id: '1',
      username: 'alkuz',
      avatar:
        // eslint-disable-next-line max-len
        'https://cdn.forbes.ru/forbes-static/new/2024/07/1a97fec5-d64b-47a2-8a18-df96b9cc13c3-668e4b6f8568e.webp',
    },
  },
  {
    id: '2',
    text: 'comment 2',
    user: {
      id: '1',
      username: 'alkuz',
      avatar:
        // eslint-disable-next-line max-len
        'https://cdn.forbes.ru/forbes-static/new/2024/07/1a97fec5-d64b-47a2-8a18-df96b9cc13c3-668e4b6f8568e.webp',
    },
  },
];

const reducers: ReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details');
  useDynamicModuleLoader({ reducers });
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const commentsError = useSelector(getArticleCommentsError);
  const navigate = useNavigate();

  const onBackToList = useCallback(() => {
    navigate(RoutePath.ARTICLES);
  }, [navigate]);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <div className={classNames(styles.articleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <div className={classNames(styles.articleDetailsPage, {}, [className])}>
      <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
        {t('Назад к списку')}
      </Button>
      <ArticleDetails id={id} />
      <Text className={styles.commentTitle} title={t('Комментарии')} />
      <AddCommentFormLazy onSendComment={onSendComment} />
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
