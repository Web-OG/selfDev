import {memo, useCallback, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {postListActions, postListReducer} from '../../model/slices/postListSlice';
import cls from './InfinityPostList.module.scss';
import {selectView} from '../../model/selectors';
import {ReducersList, useAppDispatch, useReducerManager} from 'app/providers/StoreProvider';
import {PostView} from 'entities/Post/types/post';
import {PostViewSelector} from 'features/PostViewSelector';
import {InfinityPostList} from '../InfinityPostList/InfinityPostList';
import {initPostList} from '../../model/services/initPostList/initPostList';

const reducers: ReducersList = {
  postList: postListReducer,
};

export const InfinityPostListWithViewModes = memo(() => {
  const dispatch = useAppDispatch();
  const view = useSelector(selectView);
  const {isReducersInit} = useReducerManager(reducers);

  const onChangeView = useCallback((view: PostView) => {
    dispatch(postListActions.setView(view));
  }, [dispatch]);

  useEffect(() => {
    if (isReducersInit) {
      dispatch(initPostList());
    }
  }, [dispatch, isReducersInit]);


  if (!isReducersInit) {
    return null;
  }

  return (
    <div className={cls.postList}>
      <PostViewSelector view={view} onChangeView={onChangeView}/>
      <InfinityPostList/>
    </div>
  );
});
