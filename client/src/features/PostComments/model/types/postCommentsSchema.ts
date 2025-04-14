import {LoadingSliceFields} from '@/shared/lib/types';
import {Comment} from '@/entities/Comment';

export interface PostCommentsSchema extends LoadingSliceFields {
  comments: Comment[]
}
