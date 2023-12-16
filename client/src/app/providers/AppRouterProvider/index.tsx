import {RouterProvider} from "react-router-dom";
import {router} from "./routes/routes";

export const AppRouterProvider = () => {
    return <RouterProvider router={router}/>
};