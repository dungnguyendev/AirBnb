import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import MainLayoutUser from '../layout/MainLayoutUser'
import Home from '../pages/Client/Home/Home'
import Register from '../pages/Register/Register'
import MapRoom from '../pages/Client/mapRoom/MapRoom'
import Contact from '../pages/Client/Contact/Contact'
import About from '../pages/Client/About/About'
import Detail from '../pages/Client/Detail/Detail'
import NotFound from '../pages/notFound/NotFound'
import Login from '../pages/Login/Login'
import BookRoom from '../pages/Client/bookRoom/BookRoom'

const Router = (): JSX.Element | null => {
    const element = useRoutes([
        {
            path: "/",
            element: <MainLayoutUser />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/contac",
                    element: <Contact />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/detail/:id/:loaction",
                    element: <Detail />
                },
                {
                    path: "/mapRoom/:location",
                    element: <MapRoom />
                },
                {
                    path: "/trips",
                    element: <BookRoom />
                }

            ]
        },
        {
            path: "register",
            element: <Register />
        },
        {
            path: "login",
            element: <Login />
        },
        {
            path: "*",
            element: <Navigate to="/404" />
        },
        {
            path: "/404",
            element: <NotFound />
        }
    ])
    return element
}
export default Router