import './config/styles/index.scss'
import { RouterProvider} from "react-router-dom";
import {router} from "./config/router";

const App = () => {
    return <RouterProvider router={router}/>
}
export {App};