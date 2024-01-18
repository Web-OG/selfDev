import {LayoutAuthorized} from './authorized';
import {LayoutUnAuthorized} from './unAuthorized';
import {RouteErrorPage} from 'pages/RouteError';
import {RouteObject} from 'react-router-dom';

export const createLayout = ( childrenRoutes: RouteObject[], authed: boolean) => {
  return [{
    path: '/',
    element: authed ? <LayoutAuthorized/> : <LayoutUnAuthorized/>,
    errorElement: <RouteErrorPage/>,
    children: [
      {
        errorElement: <RouteErrorPage/>,
        children: childrenRoutes
      }
    ]
  }];
};