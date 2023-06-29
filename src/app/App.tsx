import { useTheme } from 'app/providers/themeProvider'
import { Navbar } from 'widgets/Navbar'
import { AppRoutes } from './providers/routeProvider/AppRoutes'
import 'app/styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'

const App = () => {
  const {theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRoutes />
    </div>
  )
}
export default App