import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {createAppRouter} from './createAppRouter';

export const AppRouter = () => {
  const authed = true;
  const router = createAppRouter(authed);

  return <RouterProvider router={createBrowserRouter(router)}/>;
};