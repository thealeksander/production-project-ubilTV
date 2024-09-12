import { Link } from "react-router-dom"
import './styles/index.scss'
import { useTheme } from "./providers/ThemeProvider/lib/useTheme"
import { classNames } from "shared/lib/classNames"
import { AppRouter } from "./providers/router"
import { NavBar } from "widgets/NavBar"
import { Sidebar } from "widgets/Sidebar/ui"

export const App = (): JSX.Element => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    )
}