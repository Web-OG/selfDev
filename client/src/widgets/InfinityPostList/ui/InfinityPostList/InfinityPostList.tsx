import {memo} from 'react';
import {List} from 'entities/Post';
import {useSelector} from 'react-redux';
import {getPosts} from 'widgets/InfinityPostList/model/slices/postListSlice';
import {selectIsLoading, selectView} from 'widgets/InfinityPostList/model/selectors';

const InfinityPostList = memo(() => {
  const isLoading = useSelector(selectIsLoading);
  const view = useSelector(selectView);
  const posts = useSelector(getPosts.selectAll);

  return (
    <List
      view={view}
      posts={posts}
      isLoading={isLoading}
    />
  );
});

InfinityPostList.displayName = 'InfinityPostList';
export {InfinityPostList};