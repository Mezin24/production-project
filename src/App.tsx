import { Link, Route, Routes } from "react-router-dom"
import './index.scss'
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { Suspense } from "react"

const App = () => {
  return (
    <div className="app">
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