import {memo, useEffect} from 'react';
import {Post} from 'entities/Post';
import {useSelector} from 'react-redux';
import {selectPost} from '../model/selectors/selectPost';
import {Alert} from 'shared/ui/Alert/Alert';
import {selectIsLoading} from '../model/selectors/selectIsLoading';
import {selectError} from '../model/selectors/selectError';
import {getPostById} from '../model/services/getPostById';
import {ReducersList, useAppDispatch, useReducerManager} from 'app/providers/StoreProvider';
import {postDetailsReducer} from '../model/slice/postDetailsSlice';
import {Skeleton} from 'shared/ui/Skeleton';

const initialReducers: ReducersList = {
  postDetails: postDetailsReducer
};

interface Props {
  id?: string
}

const PostDetails = memo((props: Props) => {
  const {id} = props;
  const {isReducersInit} = useReducerManager(initialReducers);
  const post = useSelector(selectPost);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id && isReducersInit) {
      dispatch(getPostById(id));
    }
  }, [id, dispatch, isReducersInit]);

  if (isLoading) {
    return <Skeleton/>;
  }

  if (!post) {
    return <Alert severity='error'>
      Пост не найден
    </Alert>;
  }

  return (
    <Post post={post} isLoading={isLoading} error={error}/>
  );
});

PostDetails.displayName = 'PostDetails';
export {PostDetails};