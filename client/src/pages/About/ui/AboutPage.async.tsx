import {lazy} from 'react';

export const LazyAboutPage = lazy(() => import(/* webpackChunkName: 'AboutPage' */'./AboutPage'));
