import {createBrowserRouter} from "react-router-dom";
import {ErrorPage} from "pages/ErrorPage";
import {LayoutUnAuthorized} from "../layouts/unAuthorized";

export const unAuthRouter = createBrowserRouter([
    {
        path: '/',
        element: <LayoutUnAuthorized/>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <div>registration</div>,
            },
        ]
    },
]);