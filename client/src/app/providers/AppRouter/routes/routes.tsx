import {AppRoutes} from '../types/RouteTypes';
import {AboutPage} from 'pages/About';
import {PostsPage} from 'pages/Posts';
import {LoginPage} from 'pages/Login';
import {IndexPage} from 'pages/Index';
import {RegistrationPage} from 'pages/Registration';
import {SuccessesRegistrationPage} from 'pages/SuccessesRegistration';

export const routes: AppRoutes = {
  '/': {
    index: true,
    element: <IndexPage/>,
  },
  'login/': {
    element: <LoginPage/>,
  },
  'registration/:type': {
    element: <RegistrationPage/>,
  },
  'registration_success': {
    element: <SuccessesRegistrationPage/>,
  },
  'about/': {
    element: <AboutPage/>,
    authOnly: true
  },
  'posts/': {
    element: <PostsPage/>,
    authOnly: true
  }
};

