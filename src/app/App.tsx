import { classNames } from 'shared/lib/classNames';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar/ui';
import { Suspense } from 'react';
import { PageLoader } from 'widgets/PageLoader';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';

export function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <NavBar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
