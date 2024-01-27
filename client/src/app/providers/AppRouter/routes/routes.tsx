import {AboutPage} from 'pages/About';
import {PostsPage} from 'pages/Posts';
import {AppRoutes} from '../types/RouteTypes';
import {LoginPage} from 'pages/Login';
import {IndexPage} from 'pages/Index';

export const routes: AppRoutes = {
  '/': {
    index: true,
    element: <IndexPage/>,
  },
  'login': {
    element: <LoginPage/>,
  },
  'about': {
    element: <AboutPage/>,
    authOnly: true
  },
  'posts': {
    element: <PostsPage/>,
    authOnly: true
  }
};

