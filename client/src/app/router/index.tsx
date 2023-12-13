import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "../../pages/Main";
import {AboutPage} from "../../pages/About";
import {PostsPage} from "../../pages/Posts";
import {Suspense} from "react";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        children: [
            {
                path: 'about',
                element: <Suspense fallback={<div>Loading...</div>}><AboutPage/></Suspense>,
            },
            {
                path: 'posts',
                element: <Suspense fallback={<div>Loading...</div>}><PostsPage/></Suspense>
            }
        ]
    },
]);