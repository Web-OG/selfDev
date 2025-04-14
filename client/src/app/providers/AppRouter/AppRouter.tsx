import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {createAppRouter} from './createAppRouter';
import {useSelector} from 'react-redux';
import {getUserAuthData} from '@/entities/User';

export const AppRouter = () => {
  const authData = useSelector(getUserAuthData);
  const router = createAppRouter(Boolean(authData));

  return <RouterProvider router={createBrowserRouter(router)}/>;
};