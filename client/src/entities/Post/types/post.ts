import {User} from 'entities/User';

export type PostBlockType = 'code' | 'image' | 'text'

interface PostBlockBase {
  _id: string;
  type: PostBlockType;
  enum?: string[],
}

export interface PostCodeBlock extends PostBlockBase {
  type: 'code';
  code: string;
}

export interface PostImageBlock extends PostBlockBase {
  type: 'image';
  src: string;
  title: string;
}

export interface PostTextBlock extends PostBlockBase {
  type: 'text';
  paragraphs: string[];
  title?: string;
}

export type PostBlock = PostCodeBlock | PostImageBlock | PostTextBlock;

type PostType = 'IT' | 'SCIENCE' | 'ECONOMICS'

export type PostView = 'big' | 'small'

export interface Post {
  _id: string;
  title: string;
  author: User;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: PostType[];
  blocks: PostBlock[];
}
