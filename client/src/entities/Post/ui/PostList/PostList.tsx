import {memo, useMemo} from 'react';
import {PostListItemSkeleton} from '../PostListItem/PostListItemSkeleton';
import {PostListItem} from '../PostListItem/PostListItem';
import cls from './PostList.module.scss';
import {Post, PostView} from '../../types/post';
import classNames from 'classnames';

interface Props {
  className?: string;
  posts: Post[]
  isLoading: boolean;
  view: PostView;
}

const getSkeletons = (view: PostView) => new Array(view === 'small' ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    <PostListItemSkeleton className={cls.card} key={index} view={view}/>
  ));

export const PostList = memo((props: Props) => {
  const {
    className,
    posts,
    view = 'small',
    isLoading = false,
  } = props;

  const PostList = useMemo(() => {
    const postMapper = (post: Post) => (
      <PostListItem
        post={post}
        view={view}
        className={cls.card}
        key={post.id}
      />
    );

    return posts.length > 0
      ? posts.map(postMapper)
      : null;
  }, [posts, view]);

  return (
    <div className={classNames(className, cls[view])}>
      {PostList}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
