import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInit, userActions } from 'entities/User';
import { AppRoutes } from './providers/routeProvider/AppRoutes';

const App = () => {
  const dispatch = useDispatch();
  const init = useSelector(getUserInit);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="page-content">
          <Sidebar />
          {init && <AppRoutes />}
        </div>
      </Suspense>
    </div>
  );
};
export default App;
