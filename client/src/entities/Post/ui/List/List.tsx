import {memo, useMemo} from 'react';
import {ListItemSkeleton} from '../ListItem/ListItemSkeleton';
import {ListItem} from '../ListItem/ListItem';
import cls from './List.module.scss';
import {PostEntity, PostView} from '../../types/post';
import classNames from 'classnames';
import {Typography} from 'shared/ui/Typography';

interface Props {
  className?: string;
  posts: PostEntity[];
  isLoading: boolean;
  view: PostView;
  isHasMore: boolean;
}

const getSkeletons = (view: PostView) => new Array(view === 'small' ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    <ListItemSkeleton className={cls.card} key={index} view={view}/>
  ));

export const List = memo((props: Props) => {
  const {
    className,
    posts,
    view = 'small',
    isLoading = false,
    isHasMore,
  } = props;

  const PostList = useMemo(() => {
    const postMapper = (post: PostEntity) => (
      <ListItem
        post={post}
        view={view}
        className={cls.card}
        key={post._id}
      />
    );

    return posts.length > 0
      ? posts.map(postMapper)
      : null;
  }, [posts, view]);

  return (
    <div className={classNames(cls.list, cls[view], className)}>
      {PostList}
      {isLoading && getSkeletons(view)}
      {isHasMore && <Typography.Text fontSize='fs-accent'>
        Показать еще...
      </Typography.Text>}
    </div>
  );
});
