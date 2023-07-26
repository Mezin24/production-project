import {
  Suspense, memo, useCallback
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { RequireAuth } from './RequierAuth';

export const AppRoutes = memo(() => {
  const renderRoute = useCallback(({ path, element, auth }: AppRouteProps) => {
    const newElement = (
      <Route
        key={path}
        path={path}
        element={auth ? <RequireAuth>{element}</RequireAuth> : element}
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
