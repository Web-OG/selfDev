import {RouteProps} from 'react-router-dom';

export type RoutePaths = MainRoute | LoginRoute | AboutRoute | PostsRoute;
type MainRoute = '/';
type LoginRoute = 'login';
type AboutRoute = 'about';
type PostsRoute = 'posts';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
}

export type AppRoutes = Record<RoutePaths, AppRouteProps>