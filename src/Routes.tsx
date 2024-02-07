import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import About from "./Components/Pages/About/About"
import Error from "./Components/Pages/Error/Error"
import Landing from "./Components/Pages/Landing /Landing"


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/home',
                element: <Landing />,
            },
            {
                index: true,
                element: <Landing />,
            },
            
            {
                path: '/about',
                element: <About />,
            },
        ]
    },
]);
