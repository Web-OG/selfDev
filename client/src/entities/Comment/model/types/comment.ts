import {User} from '@/entities/User';

export interface Comment {
  _id: string;
  content: string,
  authorId: User,
  postId: string,
  parentCommentId?: string,
  likes: string[]
}
