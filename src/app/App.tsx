import { useTheme } from 'app/providers/themeProvider'
import { Navbar } from 'widgets/Navbar'
import { AppRoutes } from './providers/routeProvider/AppRoutes'
import 'app/styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/sidebar'

const App = () => {
  const {theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="page-content">
        <Sidebar/>
        <AppRoutes />
      </div>
    </div>
  )
}
export default App