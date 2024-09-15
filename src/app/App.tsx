import './styles/index.scss'
import { useTheme } from "./providers/ThemeProvider/lib/useTheme"
import { classNames } from "shared/lib/classNames"
import { AppRouter } from "./providers/router"
import { NavBar } from "widgets/NavBar"
import { Sidebar } from "widgets/Sidebar/ui"
import { Suspense } from "react"
import { useTranslation } from "react-i18next"



export const App = (): JSX.Element => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}