import {lazy} from 'react';

export const LazyPostsPage = lazy(() => import(/* webpackChunkName: 'PostsPage' */'./PostsPage'));
