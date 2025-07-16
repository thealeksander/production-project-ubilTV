import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  AppRoutesProps,
  routeConfig,
} from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { ProtectedAuth } from './ProtectedAuth';

const renderWithWrapper = (route: AppRoutesProps) => {
  const element = (
    <Suspense fallback={<PageLoader />}>
      <div className="page-wrapper">{route.element}</div>
    </Suspense>
  );

  return (
    <Route
      key={route.path}
      element={
        route?.authOnly ? <ProtectedAuth>{element}</ProtectedAuth> : element
      }
      path={route.path}
    />
  );
};

export const AppRouter = () => (
  <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
);
