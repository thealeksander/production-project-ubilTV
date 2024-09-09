import { AboutPageLazy } from "pages/AboutPage"
import { MainPageLazy } from "pages/MainPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    MAIN = 'MAIN',
    ABOUT = 'ABOUT',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.MAIN,
        element: <MainPageLazy />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.ABOUT,
        element: <AboutPageLazy />
    },
}