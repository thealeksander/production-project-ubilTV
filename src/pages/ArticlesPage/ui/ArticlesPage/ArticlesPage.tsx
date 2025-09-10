import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article';
import {
  ReducerList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader';
import {
  articlesPageReducer,
  getArticles,
} from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useSelector } from 'react-redux';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { Page } from 'widgets/Page';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';
import { useSearchParams } from 'react-router-dom';
import styles from './ArticlesPage.module.scss';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);
  const articles = useSelector(getArticles.selectAll);
  const [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useDynamicModuleLoader({ reducers });

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <Page
      onScrollEnd={onLoadNextPart}
      className={classNames(styles.articlesPage, {}, [className])}
    >
      <ArticlesPageFilters />
      <ArticleList
        isLoading={isLoading}
        view={view}
        articles={articles}
        className={styles.list}
      />
    </Page>
  );
};

export default memo(ArticlesPage);
