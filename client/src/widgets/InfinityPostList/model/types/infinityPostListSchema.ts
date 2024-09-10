import {EntityState} from '@reduxjs/toolkit';
import {PostEntity, PostView} from 'entities/Post/types/post';

export interface PostListWithPagination {
  count: number,
  pagination: {
    totalPages: number,
    currentPage: number,
    next: null | number,
    prev: null | number
  },
  hasMore: boolean;
  data: PostEntity[]
}

interface PostListSearchParams {
  page: number;
  limit?: number;
}

export interface PostListSchema extends EntityState<PostEntity, string>, PostListSearchParams, Omit<PostListWithPagination, 'data'> {
  isLoading?: boolean;
  error?: string;
  view: PostView;
  _inited?: boolean;
}
