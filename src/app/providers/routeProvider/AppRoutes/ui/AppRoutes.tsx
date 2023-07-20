import { getUserAuthData } from 'entities/User';
import {
  Suspense, memo, useCallback, useMemo
} from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig, AppRouteProps } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { RequireAuth } from './RequierAuth';

export const AppRoutes = memo(() => {
  const renderRoute = useCallback(({ path, element, auth }: AppRouteProps) => {
    const newElement = (
      <Route
        key={path}
        path={path}
        element={(
          <div className="page-wrapper">
            {auth ? <RequireAuth>{element}</RequireAuth> : element}
          </div>
        )}
      />
    );

    return newElement;
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig)
          .map(renderRoute)}
      </Routes>
    </Suspense>
  );
});
