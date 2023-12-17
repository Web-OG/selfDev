import {Suspense} from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {AboutPage} from 'pages/About';
import {PostsPage} from 'pages/Posts';
import {LayoutAuthorized} from '../layouts/authorized';
import {ErrorPage} from "pages/ErrorPage";

export const authRouter = createBrowserRouter([
  {
    path: '/',
    element: <LayoutAuthorized/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        errorElement: <ErrorPage/>,
        children: [
          {
            index: true,
            element: <div>index component in main</div>,
          },
          {
            path: 'about',
            index: true,
            element: <Suspense fallback={<div>Loading...</div>}><AboutPage/></Suspense>,
          },
          {
            path: 'posts',
            element: <Suspense fallback={<div>Loading...</div>}><PostsPage/></Suspense>
          }
        ]
      }
    ]
  },
]);