import {EntityState} from '@reduxjs/toolkit';
import {Post, PostView} from 'entities/Post/types/post';

export interface InfinityPostListSchema extends EntityState<Post, string> {
  isLoading?: boolean;
  error?: string;
  view: PostView;
  page: number;
  limit?: number;
  hasMore: boolean;
}
