import { AboutPageLazy } from 'pages/AboutPage';
import { ArticleDetailsPageLazy } from 'pages/ArticleDetailsPage';
import { ArticleEditPageLazy } from 'pages/ArticleEditPage';
import { ArticlesPageLazy } from 'pages/ArticlesPage';
import { MainPageLazy } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePageLazy } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = 'MAIN',
  ABOUT = 'ABOUT',
  PROFILE = 'PROFILE',
  ARTICLES = 'ARTICLES',
  ARTILCE_DETAILS = 'ARTILCE_DETAILS',
  ARTILCE_CREATE = 'ARTILCE_CREATE',
  ARTILCE_EDIT = 'ARTILCE_EDIT',

  // last
  NOT_FONUD = 'NOT_FONUD',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/', // +id
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTILCE_DETAILS]: '/articles/', // +id
  [AppRoutes.ARTILCE_CREATE]: '/articles/new',
  [AppRoutes.ARTILCE_EDIT]: '/articles/:id/edit',

  // last
  [AppRoutes.NOT_FONUD]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.MAIN,
    element: <MainPageLazy />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.ABOUT,
    element: <AboutPageLazy />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.PROFILE}:id`,
    element: <ProfilePageLazy />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.ARTICLES,
    element: <ArticlesPageLazy />,
    authOnly: true,
  },
  [AppRoutes.ARTILCE_DETAILS]: {
    path: `${RoutePath.ARTILCE_DETAILS}:id`,
    element: <ArticleDetailsPageLazy />,
    authOnly: true,
  },
  [AppRoutes.ARTILCE_CREATE]: {
    path: `${RoutePath.ARTILCE_CREATE}`,
    element: <ArticleEditPageLazy />,
    authOnly: true,
  },
  [AppRoutes.ARTILCE_EDIT]: {
    path: `${RoutePath.ARTILCE_EDIT}`,
    element: <ArticleEditPageLazy />,
    authOnly: true,
  },
  // last
  [AppRoutes.NOT_FONUD]: {
    path: RoutePath.NOT_FONUD,
    element: <NotFoundPage />,
  },
};
