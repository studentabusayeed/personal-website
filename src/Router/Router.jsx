import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import MenuPortfolio from "../pages/Portfolio/MenuPortfolio";
import Contact from "../pages/Home/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/portfolio',
                element: <MenuPortfolio></MenuPortfolio>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    },
])