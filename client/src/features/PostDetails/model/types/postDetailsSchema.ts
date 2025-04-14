import {PostEntity} from '@/entities/Post';

export interface PostDetailsSchema {
  isLoading: boolean;
  error?: string;
  post?: PostEntity;
}
