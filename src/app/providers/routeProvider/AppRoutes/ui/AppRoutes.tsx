import { getUserAuthData } from 'entities/User';
import { Suspense, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

export const AppRoutes = memo(() => {
  const isAuth = useSelector(getUserAuthData);
  const routes = useMemo(
    () => Object.values(routeConfig)
      .filter((route) => !(!isAuth && route.auth)),
    [isAuth]
  );

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes
          .map(({ element, path }) => (
            <Route
              key={path}
              path={path}
              element={(
                <div className="page-wrapper">
                  {element}
                </div>
              )}
            />
          ))}
      </Routes>
    </Suspense>
  );
});
