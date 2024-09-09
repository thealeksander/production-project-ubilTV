import { Link } from "react-router-dom"
import './styles/index.scss'
import { useTheme } from "./providers/ThemeProvider/lib/useTheme"
import { classNames } from "shared/lib/classNames"
import { AppRouter } from "./providers/router"
import { NavBar } from "widgets/NavBar"

export const App = (): JSX.Element => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar />
            <AppRouter />
            <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    )
}