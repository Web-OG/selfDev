import {Suspense} from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {AboutPage} from 'pages/About';
import {PostsPage} from 'pages/Posts';
import {LayoutAuthorized} from '../layouts/authorized';
import {RouteErrorPage} from 'pages/RouteErrorPage';
import {ErrorElement} from 'widgets/ErrorElement';

export const authRouter = createBrowserRouter([
  {
    path: '/',
    element: <LayoutAuthorized/>,
    errorElement: <RouteErrorPage/>,
    children: [
      {
        errorElement: <RouteErrorPage/>,
        children: [
          {
            errorElement: <ErrorElement />,
            index: true,
            element: <><div>index component in main</div></>,
          },
          {
            errorElement: <ErrorElement/>,
            path: 'about',
            index: true,
            element: <Suspense fallback={<div>Loading...</div>}><AboutPage/></Suspense>,
          },
          {
            errorElement: <ErrorElement/>,
            path: 'posts',
            element: <Suspense fallback={<div>Loading...</div>}><PostsPage/></Suspense>
          }
        ]
      }
    ]
  },
]);