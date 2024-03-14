import {lazy} from 'react';

export const LazyPostPage = lazy(() => import(/* webpackChunkName: 'PostPage' */'./PostPage'));
