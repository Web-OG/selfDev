import {useCallback, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Page} from 'shared/ui/Page/Page';
import {getPostList} from '../../model/services/getPostList/getPostList';
import {getPosts, postListActions, postListReducer} from '../../model/slices/postListSlice';
import cls from './InfinityPostList.module.scss';
import {selectIsLoading, selectView} from '../../model/selectors';
import {ReducersList, useAppDispatch, useReducerManager} from 'app/providers/StoreProvider';
import {PostView} from 'entities/Post/types/post';
import {PostList} from 'entities/Post';
import {getPostListNextPage} from '../../model/services/getPostListNextPage/getPostListNextPage';
import {PostViewSelector} from 'features/PostViewSelector';

const reducers: ReducersList = {
  postList: postListReducer,
};

export const InfinityPostList = () => {
  const dispatch = useAppDispatch();
  const posts = useSelector(getPosts.selectAll);
  const isLoading = useSelector(selectIsLoading);
  const view = useSelector(selectView);
  const {isReducersInit} = useReducerManager(reducers);

  const onChangeView = useCallback((view: PostView) => {
    dispatch(postListActions.setView(view));
  }, [dispatch]);

  const onLoadNextPart = useCallback(() => {
    dispatch(getPostListNextPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(postListActions.initState());
    dispatch(getPostList({
      page: 1,
    }));
  }, [dispatch]);


  if (!isReducersInit) {
    return null;
  }

  return (
    <Page
      onScrollEnd={onLoadNextPart}
      className={cls.postList}
    >
      <PostViewSelector view={view} onChangeView={onChangeView}/>
      <PostList
        view={view}
        posts={posts}
        isLoading={isLoading}
      />
    </Page>
  );
};
