import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRoutes } from './providers/routeProvider/AppRoutes';

const App = () => (
  <div className={classNames('app', {}, [])}>
    <Suspense fallback="">
      <Navbar />
      <div className="page-content">
        <Sidebar />
        <AppRoutes />
      </div>
    </Suspense>
  </div>
);
export default App;
