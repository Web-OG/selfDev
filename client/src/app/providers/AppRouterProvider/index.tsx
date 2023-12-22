import {RouterProvider} from 'react-router-dom';
import {authRouter} from './routes/authRouter';
import {unAuthRouter} from './routes/unAuthRouter';

interface Props {
  isAuth: boolean
}

export const AppRouterProvider = ({isAuth}: Props) => {
  return <RouterProvider router={isAuth ? authRouter : unAuthRouter}/>;
};