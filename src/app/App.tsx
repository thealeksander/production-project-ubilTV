import { Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"
import './styles/index.scss'
import { useTheme } from "./providers/ThemeProvider/lib/useTheme"
import { classNames } from "shared/lib/classNames"
import { AboutPageLazy } from "pages/AboutPage"
import { MainPageLazy } from "pages/MainPage"

export const App = (): JSX.Element => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])} >
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPageLazy />} />
                    <Route path='/' element={<MainPageLazy />}/>
                </Routes>
            </Suspense>

        </div>
    )
}