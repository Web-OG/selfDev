import {RouteProps} from 'react-router-dom';

export type RoutePaths =
  MainRoute
  | LoginRoute
  | AboutRoute
  | PostsRoute<string>
  | RegistrationRoutes
  | ProfileRoutes<string>

type MainRoute = '/';
type LoginRoute = 'login/';
type RegistrationRoutes = 'registration/' | 'registration/:type' | 'registration_success';
type ProfileRoutes<T extends string> = `profile/${T}`;
type AboutRoute = 'about/';
type PostsRoute<T extends string> = 'posts/' | `posts/${T}`;

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
}

export type AppRoutes = Record<RoutePaths, AppRouteProps>