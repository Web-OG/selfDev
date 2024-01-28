import {lazy} from 'react';

export const LazyLoginForm = lazy(() => import(/* webpackChunkName: 'LoginForm' */'./LoginForm'));
