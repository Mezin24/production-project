import { Suspense } from 'react'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { Link, Routes, Route } from 'react-router-dom'
import { classNames } from 'shared/helpers/classNames/classNames'
import { useTheme } from 'app/providers/themeProvider'
import 'app/styles/index.scss'

const App = () => {
  const {theme, toggle} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggle}>toggle theme</button>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
      </Suspense>
    </div>
  )
}
export default App