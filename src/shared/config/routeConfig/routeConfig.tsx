import { AboutPageLazy } from 'pages/AboutPage';
import { MainPageLazy } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePageLazy } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'MAIN',
  ABOUT = 'ABOUT',
  PROFILE = 'PROFILE',
  // last
  NOT_FONUD = 'NOT_FONUD',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  // last
  [AppRoutes.NOT_FONUD]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
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
  },
  // last
  [AppRoutes.NOT_FONUD]: {
    path: RoutePath.NOT_FONUD,
    element: <NotFoundPage />,
  },
};
