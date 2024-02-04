import {RouteProps} from 'react-router-dom';

export type RoutePaths =
  MainRoute
  | LoginRoute
  | AboutRoute
  | PostsRoute
  | RegistrationRoute
  | RegistrationSuccessRoute;
type MainRoute = '/';
type LoginRoute = 'login/';
type RegistrationRoute = 'registration/:type';
type RegistrationSuccessRoute = 'registration_success';
type AboutRoute = 'about/';
type PostsRoute = 'posts/';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
}

export type AppRoutes = Record<RoutePaths, AppRouteProps>