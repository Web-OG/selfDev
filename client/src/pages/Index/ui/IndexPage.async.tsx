import {lazy} from 'react';

export const LazyIndexPage = lazy(() => import(/* webpackChunkName: 'IndexPage' */'./IndexPage'));
