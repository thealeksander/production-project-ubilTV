import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { memo, useCallback } from 'react';
import {
  ArticleList,
  ArticleView,
  ArticleViewSelector,
} from 'entities/Article';
import {
  ReducerList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useSelector } from 'react-redux';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { Page } from 'shared/ui/Page';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);
  const articles = useSelector(getArticles.selectAll);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch],
  );

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useDynamicModuleLoader({ reducers });

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  return (
    <Page
      onScrollEnd={onLoadNextPart}
      className={classNames(styles.articlesPage, {}, [className])}
    >
      <ArticleViewSelector view={view} onViewClick={onChangeView} />
      <ArticleList isLoading={isLoading} view={view} articles={articles} />
    </Page>
  );
};

export default memo(ArticlesPage);
