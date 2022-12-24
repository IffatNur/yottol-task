import { createBrowserRouter } from "react-router-dom";
import Appearance from "../components/Appearance";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Appearance></Appearance>
            }
        ]
    }
])