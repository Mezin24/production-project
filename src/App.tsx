import { Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import './styles/index.scss'
import { useTheme } from "./themes/useTheme"

const App = () => {
  const {theme, toggle} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggle}>toggle theme</button>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<MainPageAsync/>} />
        <Route path="/about" element={<AboutPageAsync/>} />
      </Routes>
      </Suspense>
    </div>
  )
}
export default App