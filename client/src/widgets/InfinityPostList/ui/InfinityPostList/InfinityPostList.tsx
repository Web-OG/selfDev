import {memo, MutableRefObject, useCallback, useRef} from 'react';
import {List} from 'entities/Post';
import {useSelector} from 'react-redux';
import {getPosts} from '../../model/slices/postListSlice';
import {selectHasMore, selectIsLoading, selectView} from '../../model/selectors';
import {useAppDispatch} from 'app/providers/StoreProvider';
import {getPostListNextPage} from '../../model/services/getPostListNextPage/getPostListNextPage';
import {useInfiniteScroll} from 'shared/lib/hooks/useInfiniteScroll';
import cls from '../InfinityPostListWithViewModes/InfinityPostList.module.scss';

const InfinityPostList = memo(() => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(selectIsLoading);
  const view = useSelector(selectView);
  const posts = useSelector(getPosts.selectAll);
  const isHasMore = useSelector(selectHasMore);
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const onScrollEnd = useCallback(() => {
    dispatch(getPostListNextPage());
  }, [dispatch]);

  useInfiniteScroll({
    triggerRef,
    callback: onScrollEnd,
    skipCallback: !isHasMore
  });

  return (
    <>
      <List
        view={view}
        posts={posts}
        isLoading={isLoading}
      />
      <div className={cls.triggerEl} ref={triggerRef}/>
    </>
  );
});

InfinityPostList.displayName = 'InfinityPostList';
export {InfinityPostList};