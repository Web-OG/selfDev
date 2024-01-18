import {AboutPage} from 'pages/About';
import {PostsPage} from 'pages/Posts';
import {AppRoutes} from '../types/RouteTypes';
import {LoginPage} from 'pages/Login';

export const routes: AppRoutes = {
  '/': {
    index: true,
    element: (
      <>
        <div>index component in main</div>
      </>
    ),
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

