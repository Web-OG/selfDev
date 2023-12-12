import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>main</div>,
        children: [
            {
                path: 'about',
                element: <div>about</div>,
            },
            {
                path: 'posts',
                element: <div>posts</div>
            }
        ]
    },
]);