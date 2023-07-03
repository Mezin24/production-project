import { useTheme } from 'app/providers/themeProvider';
import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRoutes } from './providers/routeProvider/AppRoutes';
import 'app/styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="page-content">
          <Sidebar />
          <AppRoutes />
        </div>
      </Suspense>
    </div>
  );
};
export default App;
