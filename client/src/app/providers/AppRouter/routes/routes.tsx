import {AppRoutes} from '../types/RouteTypes';
import {AboutPage} from '@/pages/About';
import {PostsPage, PostPage} from '@/pages/Posts';
import {LoginPage} from '@/pages/Login';
import {IndexPage} from '@/pages/Index';
import {ChooseRegistrationTypePage, RegistrationPage} from '@/pages/Registration';
import {SuccessesRegistrationPage} from '@/pages/SuccessesRegistration';
import {ProfilePage} from '@/pages/Profile';

export const routes: AppRoutes = {
  '/': {
    index: true,
    element: <IndexPage/>,
  },
  'login/': {
    element: <LoginPage/>,
  },
  'registration/': {
    element: <ChooseRegistrationTypePage/>,
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
  'profile/:id': {
    element: <ProfilePage/>,
    authOnly: true
  },
  'posts/': {
    element: <PostsPage/>,
    authOnly: true
  },
  'posts/:id': {
    element: <PostPage/>,
    authOnly: true
  }
};

