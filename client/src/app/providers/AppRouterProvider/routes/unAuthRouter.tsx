import {createBrowserRouter} from 'react-router-dom';
import {RouteErrorPage} from 'pages/RouteErrorPage';
import {LayoutUnAuthorized} from '../layouts/unAuthorized';
import {ErrorElement} from 'widgets/ErrorElement';

export const unAuthRouter = createBrowserRouter([
  {
    path: '/',
    element: <LayoutUnAuthorized/>,
    errorElement: <RouteErrorPage/>,
    children: [
      {
        errorElement: <ErrorElement/>,
        index: true,
        element: <div>registration</div>,
      },
    ]
  },
]);