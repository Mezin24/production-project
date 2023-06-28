import { useTheme } from 'app/providers/themeProvider'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/helpers/classNames/classNames'
import { AppRoutes } from './providers/routeProvider/AppRoutes'
import 'app/styles/index.scss'

const App = () => {
  const {theme, toggle} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggle}>toggle theme</button>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <AppRoutes />
    </div>
  )
}
export default App