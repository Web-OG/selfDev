import {lazy} from 'react';

export const LazyRegistrationPage = lazy(() => import(/* webpackChunkName: 'LoginPage' */'./RegistrationPage'));
