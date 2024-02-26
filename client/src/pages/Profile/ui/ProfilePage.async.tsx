import {lazy} from 'react';

export const ProfilePageAsync = lazy(() => import(/* webpackChunkName: 'ProfilePage' */'./ProfilePage'));
