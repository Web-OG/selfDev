import {RouteProps} from 'react-router-dom';

export type RoutePaths =
  MainRoute
  | LoginRoute
  | AboutRoute
  | PostsRoute
  | RegistrationRoutes
  | ProfileRoutes<string>

type MainRoute = '/';
type LoginRoute = 'login/';
type RegistrationRoutes = 'registration/' | 'registration/:type' | 'registration_success';
// type ProfileRoutes = 'profile/:id';
type ProfileRoutes<T extends string> = `profile/${T}`;
type AboutRoute = 'about/';
type PostsRoute = 'posts/';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
}

export type AppRoutes = Record<RoutePaths, AppRouteProps>