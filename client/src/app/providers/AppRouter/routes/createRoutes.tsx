import {AppRoutes} from '../types/RouteTypes';
import {RouteObject} from 'react-router-dom';
import {ErrorElement} from 'widgets/ErrorElement';
import {RouteWithSuspense} from './components/RouteWithSuspense';
import {RequireAuthRoute} from './components/RequireAuthRoute';

export const createRoutes = (routes: AppRoutes, authed: boolean): RouteObject[] => {
  return Object.entries(routes).map((routeArr): RouteObject => {
    const [routePath, route] = routeArr;
    const element = route.authOnly
      ? <RequireAuthRoute element={route.element} authed={authed}/>
      : <RouteWithSuspense element={route.element}/>;
    const errorElement = route.errorElement ? route.errorElement : <ErrorElement/>;
    const pathOrIndex = route.index ? {index: true} : {path: routePath};

    return {
      element,
      errorElement,
      ...pathOrIndex
    };
  });
};