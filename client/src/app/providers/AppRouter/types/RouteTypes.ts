import {RouteProps} from 'react-router-dom';

export type RoutePaths =
  MainRoute
  | LoginRoute
  | AboutRoute
  | PostsRoute
  | RegistrationRoutes

type MainRoute = '/';
type LoginRoute = 'login/';
type RegistrationRoutes = 'registration/' | 'registration/:type' | 'registration_success';
type AboutRoute = 'about/';
type PostsRoute = 'posts/';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
}

export type AppRoutes = Record<RoutePaths, AppRouteProps>