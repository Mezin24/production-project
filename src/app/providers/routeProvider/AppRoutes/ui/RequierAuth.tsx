import { getUserAuthData } from 'entities/User';
import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
  children: ReactNode
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={RoutePaths.main} state={{ from: location }} />;
  }

  return (
    <>
      {' '}
      {children}
    </>
  );
};
