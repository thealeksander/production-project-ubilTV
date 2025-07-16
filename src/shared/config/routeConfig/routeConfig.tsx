import { AboutPageLazy } from 'pages/AboutPage';
import { ArticleDetailsPageLazy } from 'pages/ArticleDetailsPage';
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
  // last
  NOT_FONUD = 'NOT_FONUD',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTILCE_DETAILS]: '/articles/',

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
    path: RoutePath.PROFILE,
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
  // last
  [AppRoutes.NOT_FONUD]: {
    path: RoutePath.NOT_FONUD,
    element: <NotFoundPage />,
  },
};
